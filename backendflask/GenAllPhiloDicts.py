#The goal of this file is to generate the list of dicts use by App.js in order to pre render all routes /philosophe
import pandas
import requests
import json

#1- get the list of all philosophers
url = 'https://api.balancetonphilosophe.com/ListPhilosophe'
response = requests.post(url, json={'Theme': []})
response = response.text
response = json.loads(response)
ListPhilosophe = response['ListePhilosopheReply']

#2-get the list of all dicts of philosophers
ListDictsPhilosophers = []
url = 'https://api.balancetonphilosophe.com/form'
for item in ListPhilosophe:
    response = requests.post(url, json={"Theme":[],"Philosophe":[item],"Mots":[]})
    response = response.text
    response = json.loads(response)
    response[0]['ListReply'][0]['route'] = "/philosophe/"+item
    ListDictsPhilosophers.append(response[0]['ListReply'][0])
    #print(ListDictsPhilosophers)

with open('ListDictsPhilosophers.json', 'w', encoding='utf-8') as output:
    json.dump(ListDictsPhilosophers , output, ensure_ascii=False)



