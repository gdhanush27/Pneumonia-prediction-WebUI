import React, { useEffect,useState } from 'react';
import NavBar from '../components/Nav';
import './common.css';


const HomePage = () => {
  
  useEffect(() => {
    return () => {
      document.title = 'Home page';
    };
  }, []);
  
  const [value,setValue] = useState('')

  useEffect(()=>{
    setValue(localStorage.getItem('name'))
},[])

  return (
    <div>
      
    <div className="home-container">
        <NavBar/>
      <header>
        <h1>Pneumonia Prediction Project</h1>
      </header>

      <section>
        <p>
          Welcome {value?value+" ,":""} to the Pneumonia Prediction Project ! This project utilizes Deep learning
          to predict pneumonia from chest X-ray images. Our advanced model has been trained on
          a large dataset to provide accurate predictions.
        </p>
        <p>
          To get started, you can upload a chest X-ray image, and the model will analyze it
          to predict whether pneumonia is present or not. 
          <h5>*NOTE : Accuracy of our models are version 1 : 81.433 % AND version 2 : 83.166 %*</h5>
        </p>
      </section>
    </div></div>
  );
};

export default HomePage;
