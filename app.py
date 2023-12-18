# import nltk
# import re
# import string
# import sys
# import logging
# from flask import Flask, render_template,url_for,request
# import pandas as pd
# import pickle
# from sklearn.feature_extraction.text import CountVectorizer
# from sklearn.naive_bayes import MultinomialNB
# from sklearn.svm import SVC
# from sklearn.feature_extraction.text import TfidfVectorizer
# from sklearn.model_selection import train_test_split
# from flask import jsonify 


app = Flask(__name__)

@app.route('/')
def home():
    return render_template('project/public/index.html')


@app.route('/anggota')
def anggota():
	return render_template('project/public/anggota.html')

@app.route('/predict',methods=['POST'])
def predict():
	df = pd.read_csv('dataset_fix.csv',encoding='utf-8-sig')
	df.drop(columns=['id_review','review_clean_cased','review'],inplace=True)

	# Tokenization
	def tokenize_text(text):
		tokenize_text = text.split()
		return tokenize_text
	
	df['tokens'] = df['review_low_uncased'].apply(lambda x: tokenize_text(x))
	df['review_len'] = len(df['tokens'])
	
	# TF-IDF
	X = df[['review_low_uncased','review_len']]
	Y = df[['attractions','amenities','access','price','no_aspect']]
	
	hasil = []
	for column in Y.columns:
		X_train, X_test, Y_train, Y_test = train_test_split(X, Y[column], test_size=0.2, random_state=0)
		
		# abaikan terms yang muncul di lebih 50% dokumen atau yang muncul di kurang dari 2% dokumen
		tfidf = TfidfVectorizer(max_df=0.5, min_df=2)
		tfidf_train = tfidf.fit_transform(X_train['review_low_uncased'])
		tfidf_test = tfidf.transform(X_test['review_low_uncased'])  
		
		# PREDICT 
		classifier = SVC(kernel='linear',random_state=10)
		classifier.fit(tfidf_train, Y_train)
		classifier.score(tfidf_test, Y_test) 
		
		if request.method == 'POST':
			message = request.form['message']
			data = [message]
			vect = tfidf.transform(data).toarray()
			prediction = classifier.predict(vect)
			if prediction == 0:
				hasil.append("None")
			elif prediction == 1:
				hasil.append("Negative")
			elif prediction == 2:
				hasil.append("Neutral")
			elif prediction == 3:
				hasil.append("Positive")
	return jsonify({'prediction': hasil})

app.logger.addHandler(logging.StreamHandler(sys.stdout))
app.logger.setLevel(logging.ERROR)

if __name__ == '__main__':
    app.run(debug=True)
    