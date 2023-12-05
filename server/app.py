from flask import Flask, jsonify, request
import time
from PIL import Image
import cv2
import io
import tensorflow as tf
import numpy as np
app = Flask(__name__)

model = tf.keras.models.load_model(r'server\model\pneumonia_detection_model.keras')

def predict_img(image):
    gray_image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    blurred_image = cv2.GaussianBlur(gray_image, (7,7), 0)
    img = cv2.Canny(blurred_image, 10, 30)
    img = cv2.resize(img, (180, 180))
    img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    img = np.expand_dims(img, axis=0)
    p=model.predict(img)
    if  p < 0.97:
        return "Person is not affected with Pneumonia."
    else:
        return "Person is affected with Pneumonia."

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
    image = Image.open(image)
    image = np.array(image)
    blurred_image = cv2.GaussianBlur(image, (7,7), 0)
    canny = cv2.Canny(blurred_image, 10, 30)
    img = cv2.resize(canny, (180, 180))
    img = np.expand_dims(img, axis=0)
    p=model.predict(img)
    if  p < 0.97:
        s="Person is not affected with Pneumonia."
    else:
        s="Person is affected with Pneumonia."
    time.sleep(2) #to reduce cpu over load
    return jsonify({"text": s})

if __name__ == '__main__':
    app.run(debug=True)
