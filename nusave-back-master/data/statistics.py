from .general_info import GeneralInfo
import pandas as pd


class Statistics(GeneralInfo):

    def __init__(self):
        '''

        :param data: array de DataFrames
        :param curr_month: mes atual
        '''
        super().__init__()
        self.curr_index = Statistics.month_list.index(self.curr_month)
        if self.curr_index > 0:
            self.last_index = self.curr_index - 1
        else:
            self.last_index = 11
        self.data_stat = pd.read_json('data/data_stat.json')

    def getUserLastMonth(self, ID, filter):
        # retorna o os gasto total de certo usuario em certo filtro no mes passado
        return self.data[self.last_index][filter][ID]

    def getUserAverage(self, ID, filter):
        # retorna a media exponencial movel do usuario contabilizando 11 meses passados para certo filtro
        media = 0
        alfa = 1 / 6
        i = self.last_index

        while (i != self.curr_index):
            media = alfa * self.data[i][filter][ID] + (1 - alfa) * media
            if (i > 0):
                i = i - 1
            else:
                i = 11
        return media

    def getCategoryAverage(self, ID, filter):
        '''

        :param category: n-upla de strings e ints, as informacoes que definem a
        categoria devem estar na exata ordem: Classe,Regiao,Idade,Dependentes,Sexo,Estado_Civil
        :param filter: tipo de gasto
        :return: media
        '''
        # retorna a media exponencial movel da categoria  para certo filtro contabilizando 11 meses passados
        category = self._userCategory(ID)
        data_aux = self._getClustering(self.data_stat, category)
        data_aux = data_aux[data_aux['Filter'] == filter]
        return data_aux['Average'][data_aux.index[0]]

    def categoryAverage(self, category, filter):
        media = 0
        alfa = 1 / 6
        i = self.last_index

        while (i != self.curr_index):
            data_month = self.data[i]
            data_category = self._getClustering(data_month, category)
            media = alfa * data_category[filter].mean() + (1 - alfa) * media
            if (i > 0):
                i = i - 1
            else:
                i = 11
        return media

    def getCategoryPercentiles(self, ID, filter):
        '''

        :param category: array de strings as strings que definem a categoria devem
        estar na exata ordem: Classe,Regiao,Idade,Dependentes,Sexo,Estado_Civil
        :param filter: tipo de gasto
        :return: media
        '''
        # retorna os valores tal que desse valor para baixo estao uma fracao quantile
        # do usuarios em determinado filtro e cateogria
        category = self._userCategory(ID)
        percentiles = []
        for quantile in ['25', '50', '75']:
            data_aux = self._getClustering(self.data_stat, category)
            data_aux = data_aux[data_aux['Filter'] == filter]
            percentiles.append(data_aux['Per_' + quantile][data_aux.index[0]])
        return percentiles

    def categoryPercentiles(self, category, filter, quantile):
        media = 0
        alfa = 1 / 6
        i = self.last_index

        while (i != self.curr_index):
            data_month = self.data[i]
            data_category = self._getClustering(data_month, category)
            media = alfa * data_category[filter].quantile(quantile) + (1 - alfa) * media
            if (i > 0):
                i = i - 1
            else:
                i = 11
        return media

    def getUserLastMonthPercentage(self, ID, filter):
        # retorna a fracao de gasto de certo filtro em relacao ao total do ultimo mes
        soma = 0
        for filter in Statistics.filter_list:
            data_expends = self.data[self.last_index][filter]
            soma = soma + data_expends[ID]
        return self.data[self.last_index][filter][ID] / soma

    def _getClustering(self, dataframe, category):
        data_aux = dataframe[(dataframe['Classe'] == category[0])
                             & (dataframe['Regiao'] == category[1])
                             & (dataframe['Sexo'] == category[4])
                             & (dataframe['Estado_Civil'] == category[5])
                             ]
        dep_limit = self._setLimits(category[3], Statistics.dependant_pins)
        age_limit = self._setLimits(category[2], Statistics.age_pins)

        return data_aux[(age_limit[0] <= data_aux['Idade'])
                        & (age_limit[1] > data_aux['Idade'])
                        & (dep_limit[0] <= data_aux['Dependentes'])
                        & (dep_limit[1] > data_aux['Dependentes'])
                        ]

    def updateStatistics(self):
        data_stat = pd.DataFrame('data/data_stat.json')
        average = []
        per_25 = []
        per_50 = []
        per_75 = []
        for classe in Statistics.category_dict['Classe']:
            for regiao in Statistics.category_dict['Regiao']:
                for idade in Statistics.category_dict['Idade']:
                    for dependente in Statistics.category_dict['Dependentes']:
                        for sexo in Statistics.category_dict['Sexo']:
                            for estado_civil in Statistics.category_dict['Estado_Civil']:
                                for filtro in Statistics.filter_list:
                                    category = [classe, regiao, idade, dependente, sexo, estado_civil]
                                    average.append(self.categoryAverage(category, filtro))
                                    per_25.append(self.categoryPercentiles(category, filtro, 0.25))
                                    per_50.append(self.categoryPercentiles(category, filtro, 0.50))
                                    per_75.append(self.categoryPercentiles(category, filtro, 0.75))
        data_stat['Average'] = average
        data_stat['Per_25'] = per_25
        data_stat['Per_50'] = per_50
        data_stat['Per_75'] = per_75
        data_stat.to_json('data/data_stat.json')

    def _setLimits(self, value, pins):
        pins_use = pins.copy()
        pins_use.append(value)
        pins_use.sort()
        limit_min = pins_use[pins_use.index(value) - 1]
        limit_max = pins_use[pins_use.index(value) + 1]
        if (value == limit_max):
            limit_min = pins_use[pins_use.index(value)]
            limit_max = pins_use[pins_use.index(value) + 2]
        return [limit_min, limit_max]