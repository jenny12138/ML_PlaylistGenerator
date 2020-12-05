#All import statements
import csv
import sys
import numpy as np
import random
import pandas as pd
from sklearn import preprocessing
from PIL import Image
import PIL
import tensorflow as tf
from tensorflow.keras import datasets, layers, models
from tensorflow.keras.optimizers import Adam
from tensorflow.keras.callbacks import ModelCheckpoint, ReduceLROnPlateau
from tensorflow.keras import metrics
import random
from tensorflow import keras
import os
import cv2
import pandas as pd
import keras.models
from keras.models import load_model #

#######
def preprocess_img(image):
    """
    This method processes the image into the correct expected shape in the model (28, 28).
    """
    if (image.mode == 'RGBA'):
        image = image.convert('RGB')
    if (image.mode == 'RGB'):
        # Convert RGB to grayscale.
        image = image.convert('L')
    image.save('temp_storage/temp.jpeg')
    return image

#Function from: https://www.digitalocean.com/community/tutorials/how-to-detect-and-extract-faces-from-an-image-with-opencv-and-python
def crop_face(): #Stores the cropped face in temp_storage/cropped_face.jpg
    image = cv2.imread('temp_storage/temp.jpeg')
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

    faceCascade = cv2.CascadeClassifier(cv2.data.haarcascades + "haarcascade_frontalface_default.xml")
    faces = faceCascade.detectMultiScale(
        gray,
        scaleFactor=1.3,
        minNeighbors=3,
        minSize=(30, 30)
    )

    for (x, y, w, h) in faces:
        cv2.rectangle(image, (x, y), (x + w, y + h), (0, 255, 0), 2)
        roi_color = image[y:y + h, x:x + w]
        print("[INFO] Object found. Saving locally.")
        cv2.imwrite('temp_storage/cropped_face.jpg', roi_color)

#######
def crop_center(pil_img, crop_width, crop_height):
    img_width, img_height = pil_img.size
    return pil_img.crop(((img_width - crop_width) // 2,
                         (img_height - crop_height) // 2,
                         (img_width + crop_width) // 2,
                         (img_height + crop_height) // 2))

class Emotion_predictor:
    def __init__(self): #Load weights stored in deploy_model.h5 into deploy_model
        self.deploy_model = load_model('model/results/deploy_model.h5')

    def predict(self, request): #Predict using the image that was fed into the system
        """
        This method reads the file uploaded from the Flask application POST request,
        and performs a prediction using the Emotion detection model.
        """
        emotions = ["Angry", "Neutral", "Surprise", "Happy", "Sad"] #Holds the five emotions

        f = request.files['image'] #<class 'werkzeug.datastructures.FileStorage'>
        image = Image.open(f) #<class 'PIL.JpegImagePlugin.JpegImageFile'>
        image = preprocess_img(image) #<class 'PIL.Image.Image'>
        crop_face() ##tores the cropped face in temp_storage/cropped_face.jpg

        image = Image.open('temp_storage/cropped_face.jpg')
        image = crop_center(image, min(image.width, image.height), min(image.width, image.height)) #Crops into a square
        new_image = image.resize((48, 48)) #Changes it to the correct size for the CNN
        grey  = new_image.convert('L')
        new_image_array = np.array(grey)
        new_image_array = new_image_array[np.newaxis, ..., np.newaxis] #Changes it to the correct tensor shape for the CNN

        print("Model-generated label:")
        prediction = self.deploy_model.predict(new_image_array)
        y_classes = prediction.argmax(axis=-1)
        y_classes = y_classes.reshape((1,-1))
        y_classes = int(y_classes[0])
        print(emotions[y_classes]) #Predicts the classification
        new_image_array = new_image_array.astype(np.uint8)
        new_image_array = new_image_array.reshape(48, 48)

        return emotions[y_classes] #Returns the string corresponding to the emotion of the photo
