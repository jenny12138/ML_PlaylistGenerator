from flask import Flask, render_template, request
# Import your models
from emotion_predictor import Emotion_predictor

app = Flask(__name__)

# Instantiate your models
emotion = Emotion_predictor()

# Base endpoint to perform prediction.
@app.route('/', methods=['POST'])
def make_prediction():
    if request.form['predictor'] == 'emotion':
        prediction = emotion.predict(request)
        return render_template('index.html', prediction=prediction, generated_text=None, tab_to_show='emotion')


@app.route('/', methods=['GET'])
def load():
    return render_template('index.html', prediction=None, generated_text=None, tab_to_show='emotion')

@app.route('/predict/emotion', methods=['POST'])
def make_emotion_prediction():
    prediction = emotion.predict(request)
    print(prediction)
    return str(prediction)

if __name__ == '__main__':
    app.run(debug=True)
