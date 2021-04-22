import numpy as np 
import matplotlib.pyplot as plt
import pandas as pd

adress = 'C:/Users/Yomal/Desktop/ML/K_N_Neighbors algorithm/New iris/Iris.csv'

#Assigning column Name to dataset
names = ['Sepal-Length','Sepal-Width','Petal-Length','Petal-Width','class']

#read the dataset
dataset = pd.read_csv(adress, names=names)

dataset.head()  

#split dataset into attributes and labels

X=dataset.iloc[:, :-1].values #attributes
Y=dataset.iloc[:, 4].values

from sklearn.model_selection import train_test_split
X_train, X_test, Y_train, Y_test = train_test_split(X,Y, test_size=0.20)

from sklearn.preprocessing import StandardScaler
scaler = StandardScaler()
scaler.fit(X_train)
X_train = scaler.transform(X_train)
X_test = scaler.transform(X_test)

from sklearn.neighbors import KNeighborsClassifier #import from library
classifier = KNeighborsClassifier(n_neighbors=5) #initialze the class with one parameter that is the end neighbors 
#(this is the basically value for the K)
classifier.fit(X_train,Y_train)

Y_pred = classifier.predict(X_test)

from sklearn.metrics import classification_report, confusion_matrix
print(classification_report(Y_test,Y_pred))
print(confusion_matrix(Y_test,Y_pred))