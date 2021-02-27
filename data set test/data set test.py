
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
from sklearn.svm import SVC
import joblib
import pandas as pd



# Load dataset
joblib.load('trainingdata.joblib')
pd.set_option('display.max_columns', None)
df=pd.read_csv("D:\IIT\git hub\sdgp\Cholesterol-Detection\cardio_train 2.csv",delimiter=';')


#print(df)

#input set
newset1 = df.drop(columns=['alco','gluc','id','cholesterol','ap_hi','ap_lo','active','cardio'])
#print(newset1)

#output set
newset2 = df['cholesterol']
#print (newset2)

newset1_train, newset1_test, newset2_train, newset2_test = train_test_split(newset1,newset2, test_size=0.2)


#predection model
model = DecisionTreeClassifier()
model.fit(newset1_train, newset2_train)

joblib.dump(model,'trainingdata.joblib')
prediction = model.predict(newset1_test)

score=accuracy_score(newset2_test, prediction)
print(score)
print(prediction)



