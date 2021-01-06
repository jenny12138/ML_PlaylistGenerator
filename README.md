# Spotify Playlist Generator

Final project for McGill AI Society Intro to ML Bootcamp (Fall 2020).

Link to CNN model: https://github.com/jenny12138/EmotionClassifier

## Project Description

After uploading a selfie, the Spotify Playlist Generator determines the emotion of the selfie and outputs a corresponding Spotify playlist. A total of five emotions can be detected: Happy, Angry, Sad, Surprised, and Neutral. This web app was built using Python, Javascript, HTML and CSS. I retrieved the training data from Kaggle: https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/data. I built the convolutional neural network using Keras/Tensorflow and the web app's backend using Flask.

## Backend

Run the following command from the backend directory:

```
pip install -r requirements.txt
python web_app.py
```

## Frontend

Run the following command from the frontend directory:

```
npm init react-app frontend
npm install
npm start
```
