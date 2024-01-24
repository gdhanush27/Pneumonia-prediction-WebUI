import React, { useState , useEffect} from 'react';
import axios from 'axios';
import './common.css';
import NavBar from '../components/Nav';
import './ImageUploader.css';

const ImageUploader = () => {
  useEffect(() => {
    return () => {
      document.title = 'Image Uploader';
    };
  }, []);

  const [selectedFile, setSelectedFile] = useState(null);
  const [responseText, setResponseText] = useState('');
  const [selectedValue, setSelectedValue] = useState("1"); 
  const [loading, setLoading] = useState(false);
  const [value,setValue] = useState('')
  
    useEffect(()=>{
      setValue(localStorage.getItem('name'))
  },[])

  const handleRadioChange = (r ) => { 
    if(value)
    {
      setSelectedValue(r); 
    }
    else
    {
      setResponseText("Login to use this version");
      return;
    }
    
}; 

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    setLoading(true);
    if(selectedFile===null)
    {
      setLoading(false);
      setResponseText("Please provide image to proceed..");
      return;
    }
    const formData = new FormData();
    formData.append('image', selectedFile);
    formData.append('model', selectedValue);

    try {
      const response = await axios.post('https://nepal-refrigerator-chief-equity.trycloudflare.com/process_image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setLoading(false);
      setResponseText(response.data.text);
    } catch (error) {
        setLoading(false);
      console.error('Error uploading image:', error);
    }
  };

  

  return (
    <div className="home-container">
      <NavBar/>
        <header>
        <h1>Pneumonia Prediction Project</h1>
      </header>
        <div>
         {value?<>Welcome {value}<br/><br/></>:""}

          <label>Upload x-ray image for pneumonia prediction<br/>Supported file types (.jpg , .jpeg) :</label><br/><br/>
          <input disabled={loading} type="file" accept=".jpg,.jpeg" onChange={handleFileChange} /><br/>


      <br/><br/>

      <div className="radio-container">
      <input disabled={loading} type="radio" id="option1" name="options" className="radio-button" checked={ selectedValue === "1" } 
        onChange={() => handleRadioChange("1") } />
        <label htmlFor="option1" className="radio-label">Pneumonia_detection_model_v1</label>
      <br/>
      <input disabled={loading} type="radio" id="option2" name="options" className="radio-button" checked={ selectedValue === "2" } 
        onChange={() => handleRadioChange("2") } />
      <label htmlFor="option2" className="radio-label">Pneumonia_detection_model_v2</label>
      </div>
      <button style={{ cursor: loading ? 'not-allowed' : 'pointer' }} onClick={handleUpload} disabled={loading}>Upload and Process Image</button>
      {loading ? <p>Processing...</p> : <p className="result">{responseText}</p>}
      
    </div>
    

      </div>
  );
};

export default ImageUploader;
