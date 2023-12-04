# Pneumonia Prediction Project

This project aims to predict pneumonia from chest X-ray images using a deep learning model. The application consists of a React front-end for user interaction and a Flask back-end to handle predictions.
## Model Structure
The  convolutional neural network (CNN) for predict pneumonia uses the Keras library. It includes convolutional layers with batch normalization and max-pooling, followed by dense layers. The model uses regularization, dropout, and is compiled with the Adam optimizer. Training includes early stopping, learning rate reduction, and TensorBoard logging. The accuracy is 83.166 %.

## Project Structure

- `react/`: React application for the user interface.
- `server/`: Flask application for serving the machine learning model and handling predictions.

## Getting Started

### Frontend

1. Navigate to the `react/` directory.
2. Install dependencies:
```bash
npm install
```
3. Navigate to the `v2d/` directory.
4. Start the react app
```bash
npm start
```
5. The React app will run on http://localhost:3000.

### Backend
1. Navigate to the backend/ directory.

2. Create a virtual environment:
```bash
python -m venv venv
```
3. Activate the virtual environment:
```bash
.\venv\Scripts\activate
```
4. Install dependencies:
```bash
pip install -r requirements.txt

```
5. Run the Flask application:
```bash
python app.py
```
The Flask app will run on http://localhost:5000.

### Usage
1. Open your web browser and go to http://localhost:3000.
2. Upload a chest X-ray image through the interface.
3. The deep learning model will predict whether pneumonia is present or not.
4. View the prediction result on the web page.

### Contributing
If you'd like to contribute to this project, please follow the standard GitHub flow:
1. Fork the repository.
2. Create a new branch: ```git checkout -b feature/new-feature```
3. Commit your changes: ```git commit -m 'Add new feature'```
4. Push to the branch: ```git push origin feature/new-feature```
5. Create a pull request.