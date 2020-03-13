import json
from .statistics import Statistics
from .advisor import UserAdvisor
from .rpg import RPGFrame


class DataAPI():
    '''
    Nao se trata bem de uma API mas sim de uma classe com uma funcao que permite acessar
    features de dados de maneira mais facil ao desenvolvedor do back
    '''

    def __init__(self):
        self.stat = Statistics()
        self.adv = UserAdvisor()
        self.rpg = RPGFrame()
        print('oi')

    def update(self):
        self.stat = Statistics()
        self.adv = UserAdvisor()
        self.rpg = RPGFrame()

    def readInstructions(self, instruction: json):
        info = json.loads(instruction)
        feature = info['feature']
        if feature == 'statistics':
            return self.__statisticAct(info)
        if feature == 'advisor':
            return self.__advisorAct(info)
        if feature == 'RPG':
            return self.__rpgAct(info)
        if feature == 'update':
            return None
        return None

    def __statisticAct(self, info):
        stat = self.stat
        dict = {}
        dict["ID"] = info['ID']
        dict["user_last_month"] = stat.getUserLastMonth(info['ID'], info['filter'])
        dict["user_average"] = stat.getUserAverage(info['ID'], info['filter'])
        dict["category_average"] = stat.getCategoryAverage(info['ID'], info['filter'])
        dict["category_percentiles"] = stat.getCategoryPercentiles(info['ID'],
                                                                   info['filter'])
        return dict

    def __advisorAct(self, info):
        adv = self.adv
        ID = info['ID']
        action = info['action']
        value = info['value']
        dict = {}
        if action == 'entrada':
            instruction = ID + ',' + action + ',' + value
            dict['message'] = adv.readInstruction(instruction)
            return json.loads(json.dumps(dict))
        if action == 'saida':
            filter = info['filter']
            instruction = ID + ',' + action + ',' + value + ',' + filter
            dict['message'] = adv.readInstruction(instruction)
            return dict
        return None

    def __rpgAct(self, info):
        rpg = self.rpg
        request = info['request']
        if request == 'update':
            rpg.updateRPG()
            return None
        if request == 'summary':
            ID = info['ID']
            userframe = rpg.getUserRPGInfo(ID)
            dict = {}
            dict['ID'] = ID
            dict['xp'] = userframe['Xp']
            dict['nivel'] = userframe['Level']
            dict['quest'] = userframe['Quest']
            return dict
        return None




