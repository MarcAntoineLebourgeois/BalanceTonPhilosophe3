#!/usr/bin/env python3
# -*- coding: utf-8 -*-
from flask import Flask, jsonify, request,redirect
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import pandas
import numpy as np
from bs4 import BeautifulSoup
import requests
import datetime
from sqlalchemy import create_engine
import json

db = SQLAlchemy()
#app = Flask(__name__,static_folder='../frontend-react/build',static_url_path='/')
app = Flask(__name__)

#CORS(app, resources={r"/*": {"origins": "*"}})
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
db.init_app(app)

class Rating(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(32))
    mail = db.Column(db.String(64))
    vitesse_chargementsite = db.Column(db.Integer)
    vitesse_queries = db.Column(db.Integer)
    format_frontpage = db.Column(db.Integer)
    format_ergonomie = db.Column(db.Integer)
    philo_qualite = db.Column(db.Integer)
    philo_quantite = db.Column(db.Integer)
    bugs = db.Column(db.String(64))
    comment = db.Column(db.String(64))

class QuizScore_table(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64))
    quiz_name = db.Column(db.String(64))
    quiz_score = db.Column(db.String(64))
    date = db.Column(db.DateTime,default=datetime.datetime.utcnow)


'''
@app.route('/')
def index():
    return redirect('http://balancetonphilosophe.com/home')
'''

@app.errorhandler(404)   
def not_found(e):   
    return app.send_static_file('index.html')

@app.route('/add_rating', methods=['POST'])
def add_rating():
    rating_data = request.get_json()
    formRating = rating_data['formRating']
    print(formRating)
    new_rating = Rating(
        username=formRating['username'],
		mail=formRating['mail'],
		vitesse_chargementsite=formRating['vitesse_chargementsite'],
		vitesse_queries=formRating['vitesse_queries'],
		format_frontpage=formRating['format_frontpage'],
		format_ergonomie=formRating['format_ergonomie'],
		philo_qualite=formRating['philo_qualite'],
		philo_quantite=formRating['philo_quantite'],
		bugs=formRating['bugs'],
		comment=formRating['comment'],
        )
    db.session.add(new_rating)
    db.session.commit()
    return 'Done', 201
	

@app.route('/add_quiz_score', methods=['POST'])
def add_quiz_score():
    formQuizScore = request.get_json()
    new_quiz_score = QuizScore_table(
        username=formQuizScore['username'],
	quiz_name=formQuizScore['quiz_name'],
	quiz_score=formQuizScore['quiz_score'],
                )
    db.session.add(new_quiz_score)
    db.session.commit()
    return 'Done', 201

@app.route('/ratings')
def ratings():
    rating_list = Rating.query.all()
    ratings = []
    for rating in rating_list:
        ratings.append(
		{'username' : rating.username,
		'mail' : rating.mail,
		'vitesse_chargementsite' : rating.vitesse_chargementsite,
		'vitesse_queries' : rating.vitesse_queries,
		'format_frontpage' : rating.format_frontpage,
		'format_ergonomie' : rating.format_ergonomie,
		'philo_qualite' : rating.philo_qualite,
		'philo_quantite' : rating.philo_quantite,
		'bugs' : rating.bugs,
		'comment' : rating.comment,	
		})
    return jsonify({'ratings' : ratings})


@app.route('/scores')
def scores():
    scores_list = QuizScore_table.query.all()
    scores = []
    for score in scores_list:
        scores.append(
		{'username' : score.username,
		'quiz_name' : score.quiz_name,
		'quiz_score' : score.quiz_score,
	        'date' : score.date,	
		})
    return jsonify(scores)


@app.route('/user_scores',methods=['POST'])
def user_scores():
    cnx = create_engine('sqlite:///database.db').connect()
    df = pandas.read_sql_table('quiz_score_table',cnx)
    RequestFromUser = request.get_json()
    user = RequestFromUser['user']
    df[df['username'] == user]
    print(df)
    result = df.to_json(orient="records")
    parsed = json.loads(result)
    scores = json.dumps(parsed)  

    return jsonify(scores)




def ReadDatabase():
    #dfPhilo = pandas.read_csv('/home/ec2-user/BalanceTonPhilosophe3/backendflask/db_philo_v4.0.csv',encoding='utf-8',delimiter = ',',header=0)
    dfPhilo = pandas.read_csv('db_philo_v4.0.csv',encoding='utf-8',delimiter = ',',header=0)
    return dfPhilo

def mergeDict(dict1, dict2):
  ''' Merge dictionaries and keep values of common keys in list'''
  dict3 = {**dict1, **dict2}
  for key, value in dict3.items():
    if key == 'Theme' or key == 'Texte':
      dict3[key] = [value , dict1[key]]
  return dict3

@app.route('/form',methods=['POST'])
def form():
    #BDD Philo
    dfPhilo = ReadDatabase()
    #Requete du front
    RequestFromUser = request.get_json()
    ListeTheme = RequestFromUser['Theme']
    ListePhilosophe = RequestFromUser['Philosophe']
    ListeMots = RequestFromUser['Mots']

    if len(ListeTheme) == 1:
        ListeTheme = ListeTheme[0].split(',')

    if len(ListeTheme)==0:
        dfPhilo = dfPhilo.loc[dfPhilo['Philosophe'].isin(ListePhilosophe)]
        dfPhilo = dfPhilo.replace(np.nan, 'null', regex=True)
        dictReply = dfPhilo.T.to_dict().values()
        ListReply = []
        for dico in dictReply:
            ListeXTheme = []
            dico = {i:dico[i] for i in dico if dico[i] != "null"}
            for value in dico:
                if dico[value] == 'x':
                    ListeXTheme.append(value)
            dico = {i:dico[i] for i in dico if dico[i] != "x"}
            dico['Theme'] = ListeXTheme
            ListReply.append(dico)
        print(ListReply)
        #concatenate and delete duplicates for one single philosophe
        ListeIndex = []
        ListeThemesPhilosophe = []
        ListeTextePhilosophe = []        
        for i in range(0,len(ListReply)):
            ListeThemesPhilosophe.append(ListReply[i]['Theme'])
            ListeTextePhilosophe.append(ListReply[i]['Texte'])
        ListReply[0]['Theme'] = ListeThemesPhilosophe
        ListReply[0]['Texte'] = ListeTextePhilosophe
                            
        for i in range(1,len(ListReply)):
            del ListReply[1]

    if len(ListePhilosophe)==0:
        if ListeTheme == ['nothing']:
            ListReply = 'nothing'
        else:
            for theme in ListeTheme:
                dfPhilo = dfPhilo[(dfPhilo[theme].notnull())]
            dfPhilo = dfPhilo.replace(np.nan, 'null', regex=True)
            dictReply = dfPhilo.T.to_dict().values()
            ListReply = []
            for dico in dictReply:
                ListeXTheme = []
                dico = {i:dico[i] for i in dico if dico[i] != "null"}
                for value in dico:
                    if dico[value] == 'x':
                        ListeXTheme.append(value)
                dico = {i:dico[i] for i in dico if dico[i] != "x"}
                dico['Theme'] = ListeXTheme
                ListReply.append(dico)
        if not ListReply:
            ListReply = {'test':ListeTheme}
        else:
            #concatenate and delete duplicates for one single philosophe
            ListeIndex = []
            if len(ListReply) > 1:
                for i in range(-1,len(ListReply)-1):
                    if (ListReply[i-1]['Philosophe'] != ListReply[i]['Philosophe'])and(ListReply[i]['Philosophe'] == ListReply[i+1]['Philosophe']):
                        ListReply[i+1] = mergeDict(ListReply[i], ListReply[i+1])
                        ListeIndex.append(i)
                    elif (ListReply[i-1]['Philosophe'] == ListReply[i]['Philosophe'])and(ListReply[i]['Philosophe'] == ListReply[i+1]['Philosophe']):
                        ListReply[i+1]['Theme'] = [ListReply[i+1]['Theme']]
                        ListReply[i+1]['Texte'] = [ListReply[i+1]['Texte']]
                        for item in ListReply[i]['Theme']:
                            ListReply[i+1]['Theme'].append(item)
                        for item in ListReply[i]['Texte']:
                            ListReply[i+1]['Texte'].append(item)
                        ListeIndex.append(i)
                    elif (ListReply[i]['Philosophe'] != ListReply[i+1]['Philosophe'])and(ListReply[i-1]['Philosophe'] != ListReply[i]['Philosophe']):
                        ListReply[i]['Theme'] = [ListReply[i]['Theme']]
                        ListReply[i]['Texte'] = [ListReply[i]['Texte']]
                ListeIndex = ListeIndex[::-1]        
                for item in ListeIndex:
                    del ListReply[item]
            else:
                ListReply[0]['Theme'] = [ListReply[0]['Theme']]
                ListReply[0]['Texte'] = [ListReply[0]['Texte']]           

    if len(ListePhilosophe) == 0 and len(ListeTheme) == 0:
        ListReply = []

    return jsonify({'ListReply': ListReply},{'ListeMots': ListeMots})

@app.route('/ListPhilosophe',methods=['POST'])
def ListPhilosophe():
    #BDD Philo
    dfPhilo = ReadDatabase()
    #Requete du front
    RequestFromUser = request.get_json()
    ListeTheme = RequestFromUser['Theme']
    if len(ListeTheme)==0:
        ListePhilosopheReply = dfPhilo['Philosophe'].tolist()
        ListePhilosopheReply = list(dict.fromkeys(ListePhilosopheReply))

    if len(ListeTheme)!=0:
        for theme in ListeTheme:
            dfPhilo = dfPhilo[(dfPhilo[theme].notnull())]
        ListePhilosopheReply = dfPhilo['Philosophe'].tolist()
        ListePhilosopheReply = list(dict.fromkeys(ListePhilosopheReply))


    return jsonify({'ListePhilosopheReply': ListePhilosopheReply})

@app.route('/ListTheme',methods=['POST'])
def ListTheme():
    #BDD Philo
    dfPhilo = ReadDatabase()
    #Requete du front
    RequestFromUser = request.get_json()
    ListePhilosophe = RequestFromUser['Philosophe']

    if len(ListePhilosophe)==0:
        ListeThemeReply = dfPhilo["Philosophe"].tolist()
        ListeThemeReply = list(dfPhilo.columns)
        ListeThemeReply = ListeThemeReply[7:]
        #for i in range(0,len(ListeThemeReply)):
        #    ListeThemeReply[i] = {"Theme":ListeThemeReply[i]}

    if len(ListePhilosophe)!=0:
        dfPhilo = dfPhilo.loc[dfPhilo['Philosophe'].isin(ListePhilosophe)]
        dfPhilo = dfPhilo.dropna(axis=1,how='all')
        ListeThemeReply = list(dfPhilo.columns)
        ListeThemeReply = ListeThemeReply[7:]
        #for i in range(0,len(ListeThemeReply)):
        #    ListeThemeReply[i] = {"Theme":ListeThemeReply[i]}

    return jsonify({'ListeThemeReply': ListeThemeReply})

@app.route('/SujetDissertation',methods=['POST'])
def SujetDissertation():
    Sujet = request.get_json()
    Sujet = Sujet.replace(',', '')
    SplitSujet = Sujet.split()

    ListeTheme = ['autrui','Etat','histoire','inconscient','conscience','justice','liberté','logique','métaphysique','morale','nature','perception','politique','religion','science','technique','verité','art','bonheur','corps','désir','devoir','droit','langage','temps','travail','imagination']
    ListeThemePluriel = [theme + "s" for theme in ListeTheme ]
    ListeArticle = ["le","la",'les','une','un','des','au','de','aux','du','mon','ton','son','mes','tes','ses','notre','votre','leur','leurs'
    ,"Le","La",'Les','Une','Un','Des','Au','De','Aux','Du','Mon','Ton','Son','Mes','Tes','Ses','Notre','Votre','Leur','Leurs']

    ListeSynonyme = []
    ListeMots = []
    for word in SplitSujet:
        if word in ListeArticle:
            continue
        if word in ListeTheme :
            ListeSynonyme.append(word)
            ListeMots.append(word)
        elif word in ListeThemePluriel:
            ListeSynonyme.append(word[:-1])
            ListeMots.append(word)
        else:
            url = 'https://www.rimessolides.com/motscles.aspx?m=' + word
            headers = {'User-Agent': 'Mozilla/5.0 (Linux; Android 5.1.1; SM-G928X Build/LMY47X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.83 Mobile Safari/537.36'}
            r = requests.get(url, headers=headers).text
            soup = BeautifulSoup(r,'html.parser')
            synonymes = soup.find('div',{'id':'divResultat'})
            for item in synonymes:
                item = item.text
                item = item[:-1]
                if item in ListeTheme:
                    ListeSynonyme.append(item)
                    ListeMots.append(word)
                    break

    ListeTheme = list(dict.fromkeys(ListeSynonyme))
    ListeMots = list(dict.fromkeys(ListeMots))
    if not ListeTheme:
        ListeTheme= ['nothing']

    return jsonify({'ListeTheme': ListeTheme},{'ListeMots':ListeMots})


if __name__ == "__main__":
    app.run(debug=True)
