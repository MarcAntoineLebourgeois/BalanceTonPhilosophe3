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
    ListDictsPhilosophers.append(response[0]['ListReply'][0])
    #print(ListDictsPhilosophers)

with open('ListDictsPhilosophers.json', 'w') as output:
    json.dump(ListDictsPhilosophers , output, ensure_ascii=False)



