
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

# gender--       male =2  , female =1
#smoking--       smoke=0 , not smoke =0
#cholestero --   1-normal   2-above normal  3-well above normal
#age  ---        is in days

# Load dataset
#joblib.load('trainingdata.joblib')
pd.set_option('display.max_columns', None)
df=pd.read_csv("D:\IIT\Cholesterol-Detection\medical.csv",delimiter=';')


print(df)

#input set
newset1 = df.drop(columns=['alco','gluc','id','cholesterol','ap_hi','ap_lo','active','cardio'])
print(newset1)

#output set
newset2 = df['cholesterol']
#print (newset2)


#splitting the data set for training and testing
newset1_train, newset1_test, newset2_train, newset2_test = train_test_split(newset1,newset2, test_size=1)


#predection model
model = DecisionTreeClassifier()
model.fit(newset1_train, newset2_train)

joblib.dump(model,'trainingdata.joblib')
prediction = model.predict(newset1_test)

#acurracy testing
score=accuracy_score(newset2_test, prediction)


#                           age,gender,height,weight,smoke
prediction=model.predict([['17000','2','155','90','1']])
#predictions=model.predict([['22469','1','155','69.0','0']])
predictions=model.predict([['19069','2','185','95','0']])


print("accuracy score :",score)

print("first prediction : ",prediction)
print("second prediction : ",predictions)




