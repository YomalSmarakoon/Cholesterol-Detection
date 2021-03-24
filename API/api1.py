from flask import Flask
from flask_restful import Api, Resource
from matplotlib import pyplot
from sklearn.model_selection import train_test_split
from sklearn.model_selection import cross_val_score
from sklearn.model_selection import StratifiedKFold
from sklearn.metrics import classification_report
from sklearn.metrics import confusion_matrix
from sklearn.metrics import accuracy_score
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.discriminant_analysis import LinearDiscriminantAnalysis
from sklearn.naive_bayes import GaussianNB
from sklearn.svm import SVC
import joblib
import pandas as pd


import pymongo 
from pymongo import MongoClient
import pprint
from flask import Flask, render_template, jsonify


app= Flask(__name__ )


#class helloworld(Resource):
#	def get(self):
#		return{"data":"helloworld"}

@app.route('/algorithm',methods=["GET"])
def ml():
        #call the mongo db  data base server
        mongo_uri = "mongodb://localhost:27017/"
        client = pymongo.MongoClient(mongo_uri)
                
        #taking db as "details" data base
        db = client.details
        print(db.list_collection_names())
                
        #taking tables as "userdetails" collection
        table=db.userdetails
        print(table.find_one())
                
        #finding a random collection in "userdetails'
        instance = table.find_one()
                
        #input variables
        UserName= instance['name']
        UserAge= instance['age']
        UserHeight=instance['height']
        UserWeight=instance['weight']
        UserGender= instance['gender']
        UserSmoker=instance['smoker']

        #loading testing data
        model=joblib.load('trainingdataofLR.joblib')


        #if user smoke
        if UserSmoker == 'no':
                smoker=0

        elif UserSmoker == 'yes':
                smoker=1
                            
        #if gender
        if UserGender == 'Male':
                gender=2
                
        elif UserGender == 'Female':
                gender=1
        #age to days
        age = UserAge*365.2425
                    
        #                           age,gender, height,   weight,    smoke
        predictions=model.predict([[age,gender,UserHeight,UserWeight,smoker]])


        
        #connecting to result database
        resultcollection = db["results"]


        
        if predictions == 1 :
                pred1 = "the patient has NORMAL levels of cholesterol [1]"

                post1 = {"pred": pred1, "name": UserName} #data

                #return resultcollection.insert_one(post1)

                return resultcollection.insert_one(post1)

                

        elif predictions == 2 :

                pred2 = "the patient has ABOVE NORMAL levels of cholesterol [2]"

                post2 = { "pred": pred2, "name": UserName} #data

                return resultcollection.insert_one(post2)


                #return resultcollection.insert_one(post2)


        	 
        elif predictions == 3 :
                pred3 = "the patient has WELL ABOVE NORMAL levels of cholesterol [3]"

                post3 = {"pred": pred3, "name": UserName} #data

                return resultcollection.insert_one(post3)

                       	
                

#api.add_resource(helloworld,"/helloworld")

if __name__ == "__main__":
	app.run(debug=True)

