#The goal of this file is to gen all routes for react snapshot
#  "reactSnapshot": {
#    "include": [
#      "/philosophes",
#      "/dissertations",
#      "/themes",
#     => "/philosophe/Platon"
#    ],
import requests
import json

#1- get the list of all philosophers
url = 'https://api.balancetonphilosophe.com/ListPhilosophe'
response = requests.post(url, json={'Theme': []})
response = response.text
response = json.loads(response)
ListPhilosophe = response['ListePhilosopheReply']

#2-gen the list
ListRoutesPhilo = []
for item in ListPhilosophe:
    ListRoutesPhilo.append("/philosophe/" + item )

with open('ListRoutesPhilo.json', 'w', encoding='utf-8') as output:
    json.dump(ListRoutesPhilo , output, ensure_ascii=False)












