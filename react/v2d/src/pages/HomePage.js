import React, { useEffect } from 'react';

import './HomePage.css'; // Import your CSS file
import { Link } from 'react-router-dom';
const HomePage = () => {
  const logout =()=>{
    localStorage.clear()
    window.location.reload()
}
  useEffect(() => {
    return () => {
      document.title = 'Home page';
    };
  }, []);
  
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
          <h5>*NOTE : Accuracy of our models are version 1 : 83.166 % AND version 2 : 81.433 %*</h5>
        </p>
      </section>

      <section>
        <Link to="/ImageUploader" className="upload-link">
          Get Started
        </Link>
      </section>
      <section>
        <Link to="/DonationPage" className="upload-link">
        Donation Page
        </Link>
      </section>
      <section>
        <button onClick={logout}>Logout</button>
      </section>
    </div></div>
  );
};

export default HomePage;
