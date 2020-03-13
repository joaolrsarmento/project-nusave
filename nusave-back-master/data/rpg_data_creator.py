from data_API import DataAPI
import json
import random as rd
import pandas as pd
from math import inf
from rpg import RPGFrame
from general_info import GeneralInfo
from statistics import Statistics
'''
x = {
    "Classe": [0],
    "Regiao": [0],
    "Idade": [0],
    "Dependentes": [0],
    "Sexo": [0],
    "Estado_Civil": [0],
    "Filter": [0],
    "Average": [0],
    "Per_25": [0],
    "Per_50": [0],
    "Per_75": [0]
}

df = pd.DataFrame(x)

for classe in Statistics.category_dict['Classe']:
    for regiao in Statistics.category_dict['Regiao']:
        for idade in Statistics.category_dict['Idade']:
            for dependente in Statistics.category_dict['Dependentes']:
                for sexo in Statistics.category_dict['Sexo']:
                    for estado_civil in Statistics.category_dict['Estado_Civil']:
                        for filtro in Statistics.filter_list:
                            x = {
                                "Classe": [classe],
                                "Regiao": [regiao],
                                "Idade": [idade],
                                "Dependentes": [dependente],
                                "Sexo": [sexo],
                                "Estado_Civil": [estado_civil],
                                "Filter": [filtro],
                                "Average": [0],
                                "Per_25": [0],
                                "Per_50": [0],
                                "Per_75": [0]
                            }
                            df2 = pd.DataFrame(x)
                            df = df.append(df2, ignore_index=True)
df = df.drop(0)

df.to_json('data_stat.json')

'''
'''
gi = GeneralInfo()

ID = []

n = 10000

for i in range(0,n):
    ID.append(str(i))

for month in GeneralInfo.month_list:
    dataframe = pd.read_json('./monthjson/' + month + '.json')
    dataframe['ID'] = ID
    dataframe.to_json('./monthjson/' + month + '.json')

dataframe = pd.read_json('rpg_data.json')
dataframe['ID'] = ID
dataframe.to_json('rpg_data.json')
'''



'''
rpg = RPGFrame()
rpg.updateRPG()
'''
'''
n = 10000
saques = []
for i in range(0, n):
    saques.append(rd.uniform(0, 400))

info = GeneralInfo()
for month in GeneralInfo.month_list:
    aux = pd.read_json('./monthjson/'+ month + '.json')
    aux['Saques'] = saques
    aux.to_json('./monthjson/'+ month + '.json')
'''

api = DataAPI()
for ID in range(0,100):
    for filter in GeneralInfo.filter_list:
        x = {
            "ID": ID,
            "feature": "statistics",
            "request": "summary",
            "filter": filter
        }
        inst = json.dumps(x) #tranforma em json
        retorno = api.readInstructions(inst)







