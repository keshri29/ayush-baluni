from flask import Flask, render_template, request,jsonify
import pickle
import spacy
from flask_cors import CORS
from sklearn.feature_extraction.text import CountVectorizer
nlp=spacy.load("en_core_web_sm")
app = Flask(__name__)
CORS(app);
with open('FinalModel.pkl','rb') as f:
    clf,cv,disease=pickle.load(f)


@app.route('/res')
def res():
     return {"message":"hey"}
@app.route("/get",methods=["POST"])
def get():
        # return jsonify({"Result": request.json['name']})
        input_message=request.json['name'];
        if(len(input_message)==0):
             return jsonify({"Result":'NONE'})
        print(input_message);
        # return {'data':'abc'}
        temp=[]
        for j in input_message:
            doc=nlp(j);
            for token in doc:
                if not token.is_stop:
                    temp.append(token.lemma_)
        vc=cv.transform(i for i in temp);
        val=clf.predict(vc);
        ans=[]
        for i in val:
             ans.append(disease[i])
        return jsonify({'Result':ans}); 

# Running app
if __name__ == '__main__':
    app.run(debug=True)