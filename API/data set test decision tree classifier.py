
# Load libraries
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
from sklearn.model_selection import RandomizedSearchCV
from sklearn.svm import SVC
import joblib
from sklearn import tree
import pandas as pd
from sklearn.datasets import make_classification
from sklearn.ensemble import RandomForestClassifier
from sklearn.tree import export_graphviz
from matplotlib.pyplot import *
import graphviz
from sklearn.metrics import classification_report
from sklearn import datasets
from sklearn.tree import DecisionTreeClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import roc_curve, roc_auc_score
from sklearn.model_selection import train_test_split
import matplotlib.pyplot as plt
import time
import seaborn as sn
import pandas as pd
import matplotlib.pyplot as plt
from sklearn import metrics







#start_time = time.time()


# gender--       male =2  , female =1
#smoking--       smoke=1 , not smoke =0
#cholestero --   1-normal   2-above normal  3-well above normal
#age  ---        is in days

# Load dataset
#joblib.load('trainingdata.joblib')
pd.set_option('display.max_columns', None)
df=pd.read_csv("D:\IIT\Cholesterol-Detection\API\medical.csv",delimiter=';')


#print(df)

#input set
newset1 = df.drop(columns=['alco','gluc','id','cholesterol','ap_hi','ap_lo','active','cardio'])


#output set
newset2 = df['cholesterol']
#print (newset2)


#splitting the data set for training and testing
newset1_train, newset1_test, newset2_train, newset2_test = train_test_split(newset1,newset2, test_size=0.1)



#predection model


model =DecisionTreeClassifier(ccp_alpha=0.0, class_weight=None, criterion='gini',
                              max_depth=28, max_features='sqrt', max_leaf_nodes=None,
                              min_impurity_decrease=0.0, min_impurity_split=None,
                              min_samples_leaf=1, min_samples_split=11,
                              min_weight_fraction_leaf=0.0,
                              random_state=None, splitter='best')

#model= RandomForestClassifier()


#fitting the model
model.fit(newset1, newset2) 
y_pred = model.predict(newset1_test)



totac = accuracy_score(newset2_test, y_pred)


#                           age,gender,height,weight,smoke
prediction1=model.predict([[22265,2,160,55,0]])

#prediction2=model.predict([['21900','1','152.4','58','0']])



#saving to a joblib file
joblib.dump(model,'trainingdata.joblib')



print("accuracy                    : ",totac)
print("first prediction patient  : ",prediction1)

















