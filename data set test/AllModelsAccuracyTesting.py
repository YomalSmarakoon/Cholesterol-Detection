
# Load libraries
from pandas import read_csv
from sklearn.metrics import accuracy_score
from sklearn.metrics import precision_score
from sklearn.metrics import recall_score
from sklearn.metrics import f1_score
from sklearn.metrics import cohen_kappa_score
from sklearn.metrics import roc_auc_score
from sklearn.metrics import confusion_matrix
from keras.models import Sequential
from keras.layers import Dense
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
from sklearn.ensemble import RandomForestClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.discriminant_analysis import LinearDiscriminantAnalysis
from sklearn.naive_bayes import GaussianNB
from sklearn.svm import SVC
import joblib
import pandas as pd

# Load dataset

pd.set_option('display.max_columns', None)
df=pd.read_csv("D:\IIT\Cholesterol-Detection\medical.csv",delimiter=';')


#input set
newset1 = df.drop(columns=['alco','gluc','id','cholesterol','ap_hi','ap_lo','active','cardio'])
print(newset1)

#output set
newset2 = df['cholesterol']


#splitting the data set for training and testing
newset1_train, newset1_test, newset2_train, newset2_test = train_test_split(newset1,newset2, test_size=0.1)


#predection model DecisionTreeClassifier
model1 = DecisionTreeClassifier()
model1.fit(newset1_train, newset2_train)
prediction1 = model1.predict(newset1_test)


#predection model LogisticRegression
model2 = LogisticRegression(solver='lbfgs', max_iter=1000)
model2.fit(newset1, newset2)
prediction2 = model2.predict(newset1_test)

#predection model RandomForestClassifier

model3 = RandomForestClassifier()
model3.fit(newset1_train, newset2_train)
prediction3 = model3.predict(newset1_test)

#acurracy testing
score1=accuracy_score(newset2_test, prediction1)



score2=accuracy_score(newset2_test, prediction2)
score3=accuracy_score(newset2_test, prediction3)


print("Accuarcy of the DecisionTreeClassifier predection model is : ",score1)
print("Accuarcy of the LogisticRegression predection model is     : ",score2)
print("Accuarcy of the RandomForestClassifier predection model is : ",score3)




