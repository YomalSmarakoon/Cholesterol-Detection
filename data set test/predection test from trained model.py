from pandas import read_csv
from pandas.plotting import scatter_matrix
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

#loading testing data
model=joblib.load('trainingdata.joblib')



#random test data
#                           age,gender,height,weight,smoke
predictions=model.predict([['18250','1','152.4','52','0']])
#predictions=model.predict([['17000','2','155','90','1']])



if predictions == 1 :
    print("the patient has NORMAL levels of cholesterol [1]")

elif predictions == 2 :
    print("the patient has ABOVE NORMAL levels of cholesterol [2]")
         
elif predictions == 3 :
    print("the patient has WELL ABOVE NORMAL levels of cholesterol [3]")
        

    
