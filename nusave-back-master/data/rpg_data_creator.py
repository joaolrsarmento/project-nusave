from data_API import DataAPI
import json
import random as rd
import pandas as pd
from math import inf
from rpg import RPGFrame
from general_info import GeneralInfo


rpg = RPGFrame()

ID = []

n = 10000

for i in range(0,n):
    ID.append(str(i))

for month in rpg.month_list:
    dataframe = pd.read_json('./monthjson/' + month + '.json')
    dataframe['ID'] = ID
    dataframe.to_json('./monthjson/' + month + '.json')

dataframe = pd.read_json('rpg_data.json')
dataframe['ID'] = ID
dataframe.to_json('rpg_data.json')




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
x = {
    "ID": 8,
    "feature": "RPG",
    "request": "summary",
}

inst = json.dumps(x) #tranforma em json

retorno = api.readInstructions(inst)
#rotorno e uma string tal que seu conteudo sera mostrado pelo print

print(retorno)
print(type(retorno))






