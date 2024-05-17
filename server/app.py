from flask import Flask, jsonify, request
import time
from PIL import Image
import cv2
import os
import tensorflow as tf
import numpy as np
app = Flask(__name__)
app.config[r'E:\\GIT\\Pneumoia-prediction-WebUI\\server\\uploads'] = 'uploads'
model1 = tf.keras.models.load_model(r'server\model\pneumonia_detection_model_v1.keras')
model2 = tf.keras.models.load_model(r'server\model\pneumonia_detection_model_v2.keras')

# def predict_img(image):
#     gray_image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
#     blurred_image = cv2.GaussianBlur(gray_image, (7,7), 0)
#     img = cv2.Canny(blurred_image, 10, 30)
#     img = cv2.resize(img, (180, 180))
#     img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
#     img = np.expand_dims(img, axis=0)
#     p=model1.predict(img)
#     return p

def add_cors_headers(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
    response.headers['Access-Control-Allow-Methods'] = 'OPTIONS, HEAD, GET, POST, PUT, DELETE'
    return response

app.after_request(add_cors_headers)

@app.route('/process_image', methods=['POST'])

def process_image():
    if 'image' not in request.files:
        return jsonify({"error": "No image provided"}), 400
    image = request.files['image']
    model_n = request.form['model']
    image = Image.open(image)
    image = np.array(image)
    blurred_image = cv2.GaussianBlur(image, (7,7), 0)
    canny = cv2.Canny(blurred_image, 10, 30)
    img = cv2.resize(canny, (180, 180))
    img = np.expand_dims(img, axis=0)
    if model_n=="1":
        p=model1.predict(img)
    else:
        p=model2.predict(img)

    if  p < 0.97:
        s="Person is not affected with Pneumonia."+" Model Version : "+model_n
    else:
        s="Person is affected with Pneumonia."+" Model Version : "+model_n

    return jsonify({"text": s})

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0",port=5000)
