from statistics import Statistics


class UserAdvisor(Statistics):

    def __init__(self):
        super().__init__()

    def readInstruction(self, instruction: str):
        '''

        :param instruction: deve ser uma string que informa a ID do usuario, o tipo de
        transacao(entrada/saida), o valor e se saida deve conter o tipo de gasto
        :type instruction: string de formato 'ID,entrada,valor' ou 'ID,saida,valor,filtro'
        :return: mensagem de aviso destinada ao popup
        '''
        info = self.__decodeInstruction(instruction)
        ID = info[0]
        processo = info[1]
        valor = float(info[2])
        if processo == 'entrada':
            return self.__storingAdvice(ID, valor)
        elif processo == 'saida':
            filter = info[3]
            return self.__expendingAdvice(ID, valor, filter)
        else:
            return None

    def __decodeInstruction(self, instruction: str):
        return instruction.split(sep=',')

    def __storingAdvice(self, ID: str, valor: float):
        mean_user = self.getUserAverage(ID, 'Entrada')
        if (valor >= 0.5 * mean_user):
            return '%s. Houve uma grande entrada na sua conta recentemente. Organize' \
                   ' parte desse dinheiro para cuprir com a quest desse mes :).'% ID
        else:
            return None

    def __expendingAdvice(self, ID: str, valor: float, filter: str):
        mean_user = self.getUserAverage(ID, filter)
        if (valor >= 0.8 * mean_user) & (valor <= mean_user):
            percentual = 100 * valor / mean_user
            mensagem1 = 'Já foram gastos %.0f%% do valor projetado para você este ' \
                        'mês.\n' % percentual
        elif valor > mean_user:
            mensagem1 = 'Já foi gasto mais do que o esperado para você esse mês.\n'
        else:
            mensagem1 = ''
        mean_category = self.getCategoryAverage(ID, filter)
        if (valor >= 0.8 * mean_category) & (valor <= mean_category):
            percentual = 100 * valor / mean_category
            mensagem2 = 'Já foram gastos %.0f%% da média projetada para pessoas na ' \
                        'mesma situação que você.\n' % percentual
        elif valor > mean_user:
            mensagem2 = 'Já foi gasto mais do que a média projetada para pessoas na ' \
                        'mesma situação que você.\n'
        else:
            mensagem2 = ''
        if (mensagem1 != '') | (mensagem2 != ''):
            return ('%s. ' % ID) + mensagem1 + mensagem2 + 'Verifique seus gastos e ' \
                                                           'analise se entao de acordo com os seus planos financeiros'
        else:
            return None
