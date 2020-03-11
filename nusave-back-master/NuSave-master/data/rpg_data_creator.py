from data_API import DataAPI
import json
import random as rd
import pandas as pd
from math import inf
from rpg import RPGFrame
from general_info import GeneralInfo

'''
dataframe = pd.read_json('./monthjson/janeiro.json')
nome = dataframe['Nome'].copy()
n = dataframe.shape[0]

columns = ['Xp', 'Level', 'Quest']
xp_pins = [-1, 50, 200, 450, 800, 1250, 1800, 2450, 3200, 4050, 5000, 6050, 7200, 8450,
           9800, 11250, 12800, 14450, 16200, 18050, inf]

xp = []
level = []
quest = []

for i in range(0, n):
    xp.append(rd.randint(0, 10000))
    level.append(0)
    quest.append(0)
frame = {'Xp': xp, 'Level': level, 'Quest': quest}
rpg_data = pd.DataFrame(frame)
rpg_data["Nome"] = nome
rpg_data.to_json('rpg_data.json')
print(rpg_data)
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
x = {
    "ID": "IHMEMNDNYNRCZDCTZDUY",
    "feature": "RPG",
    "request": "summary"
}

inst = json.dumps(x)
print(api.readInstructions(inst))





