import pandas
import itertools
import numpy as np

#dfPhilo = pandas.read_csv('/home/ec2-user/BalanceTonPhilosophe3/backendflask/db_philo_v4.0.csv',encoding='utf-8',delimiter = ',',header=0)
dfPhilo = pandas.read_csv('db_philo_v4.0.csv',encoding='utf-8',delimiter = ',',header=0)
#print(dfPhilo)

a_list = ['morale','politique','droit']
all_combinations = []
for r in range(len(a_list) + 1):
    combinations_object = itertools.combinations(a_list, r)
    all_combinations += combinations_object
output = [list(item) for item in all_combinations] 
output.pop(0)


#new df
dfTheme.drop(dfPhilo.columns[[0,1,2,3,4,5,6]], axis=1, inplace=True)
headersname = list(dfTheme.columns.values.tolist()) 
total_comb = 0

#replace x by column name
for x in range(len(dfTheme.index)):
    for y in range(len(headersname)):
        if dfTheme.iloc[x,y] == "x":
            dfTheme.iloc[x,y] = headersname[y]

#for i in range(len(dfTheme.index)) :
for i in range(2):
    #get list of used themes
    listeTheme = dfTheme.values.tolist()[i]
    listeTheme = [x for x in listeTheme if str(x) != 'nan']

    #Generation of all comb
    all_combinations = []
    for r in range(len(listeTheme) + 1):
        combinations_object = itertools.combinations(listeTheme, r)
        all_combinations += combinations_object
    output = [list(item) for item in all_combinations] 
    output.pop(0)
    print(output)
