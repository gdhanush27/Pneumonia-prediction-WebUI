import React from 'react';
import './HomePage.css'; // Import your CSS file
import { Link } from 'react-router-dom';
const HomePage = () => {
  return (
    <div>
    <div className="home-container">
        
      <header>
        <h1>Pneumonia Prediction Project</h1>
      </header>

      <section>
        <p>
          Welcome to the Pneumonia Prediction Project! This project utilizes Deep learning
          to predict pneumonia from chest X-ray images. Our advanced model has been trained on
          a large dataset to provide accurate predictions.
        </p>
        <p>
          To get started, you can upload a chest X-ray image, and the model will analyze it
          to predict whether pneumonia is present or not. 
          <h5>*NOTE : Our model accuracy is 83.166 %*</h5>
        </p>
      </section>

      <section>
        <Link to="/ImageUploader" className="upload-link">
          Get Started
        </Link>
      </section>
    </div></div>
  );
};

export default HomePage;
