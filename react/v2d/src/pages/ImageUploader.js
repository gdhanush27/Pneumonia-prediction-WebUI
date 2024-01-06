import React, { useState , useEffect} from 'react';
import axios from 'axios';
import Nav from '../components/Nav';
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

  const handleRadioChange = (value ) => { 
    setSelectedValue(value); 
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
    console.log(formData);

    try {
      const response = await axios.post('https://andy-scene-tracked-brief.trycloudflare.com/process_image', formData, {
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
    <div>
        <Nav/>
        <div className="login-container">
          <label>Upload x-ray image for pneumonia prediction<br/>Supported file types (.jpg , .jpeg) :</label><br/><br/>
      <input type="file" accept=".jpg,.jpeg" onChange={handleFileChange} /><br/>
      


      <input type="radio" id="option1" value="option1" checked={ selectedValue === "1" } 
        onChange={() => handleRadioChange("1") } /> Pneumonia_detection_model_v1 <br/>

      <input type="radio" id="option1" value="option1" checked={ selectedValue === "2" } 
        onChange={() => handleRadioChange("2") } /> Pneumonia_detection_model_v2 <br/>



      <button style={{ cursor: loading ? 'not-allowed' : 'pointer' }} onClick={handleUpload} disabled={loading}>Upload and Process Image</button>
      {loading ? <p>Processing...</p> : <p>{responseText}</p>}
      
    </div></div>
  );
};

export default ImageUploader;
