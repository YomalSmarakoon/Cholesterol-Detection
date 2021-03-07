import pandas as pd

data = pd.read_csv("D:\IIT\git hub\sdgp\Cholesterol-Detection\cardio_train 2.csv")




data.drop(['id'], axis=1)
print(data.head())


#'ap_hi','ap_lo','gluc','alco','active','cardio'
