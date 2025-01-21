// import React, { useState , useEffect} from 'react';
// import axios from 'axios';
// import './common.css';
// import NavBar from '../components/Nav';
// import './ImageUploader.css';

// const ImageUploader = () => {
//   useEffect(() => {
//     return () => {
//       document.title = 'Image Uploader';
//     };
//   }, []);

//   const [selectedFile, setSelectedFile] = useState(null);
//   const [responseText, setResponseText] = useState('');
//   const [selectedValue, setSelectedValue] = useState("1"); 
//   const [loading, setLoading] = useState(false);
//   const [value,setValue] = useState('')
  
//     useEffect(()=>{
//       setValue(localStorage.getItem('name'))
//   },[])

//   const handleRadioChange = (r ) => { 
//     if(value)
//     {
//       setSelectedValue(r); 
//     }
//     else
//     {
//       setResponseText("Login to use this version");
//       return;
//     }
    
// }; 

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleUpload = async () => {
//     setLoading(true);
//     if(selectedFile===null)
//     {
//       setLoading(false);
//       setResponseText("Please provide image to proceed..");
//       return;
//     }
//     const formData = new FormData();
//     formData.append('image', selectedFile);
//     formData.append('model', selectedValue);

//     try {
//       const response = await axios.post('http://127.0.0.1:5000/process_image', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       setLoading(false);
//       setResponseText(response.data.text);
//     } catch (error) {
//         setLoading(false);
//       console.error('Error uploading image:', error);
//     }
//   };

  

//   return (<><NavBar/>
//     <div className="home-container">
      
//         <header>
//         <h1>Pneumonia Prediction Project</h1>
//       </header>
//         <div>
//          {value?<>Welcome {value}<br/><br/></>:""}

//           <label>Upload x-ray image for pneumonia prediction<br/>Supported file types (.jpg , .jpeg) :</label><br/><br/>

//                 <input  type="file" accept=".jpg,.jpeg" onChange={handleFileChange} /><br/>
//       <br/><br/>

//       <div className="radio-container">
//       <input disabled={loading} type="radio" id="option1" name="options" className="radio-button" checked={ selectedValue === "1" } 
//         onChange={() => handleRadioChange("1") } />
//         <label htmlFor="option1" className="radio-label">Pneumonia_detection_model_v1</label>
//       <br/>
//       <input disabled={loading} type="radio" id="option2" name="options" className="radio-button" checked={ selectedValue === "2" } 
//         onChange={() => handleRadioChange("2") } />
//       <label htmlFor="option2" className="radio-label">Pneumonia_detection_model_v2</label>
//       </div>
//       <button style={{ cursor: loading ? 'not-allowed' : 'pointer' }} onClick={handleUpload} disabled={loading}>Upload and Process Image</button>
//       {loading ? <p>Processing...</p> : <p className="result">{responseText}</p>}
      
//     </div>
    

//       </div></>
//   );
// };

// export default ImageUploader;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Button, Typography, Radio, RadioGroup, FormControlLabel, CircularProgress } from '@mui/material';
import NavBar from '../components/Nav';
import './common.css';
import './ImageUploader.css';

const ImageUploader = () => {
  useEffect(() => {
    document.title = 'Image Uploader';
  }, []);

  const [selectedFile, setSelectedFile] = useState(null);
  const [responseText, setResponseText] = useState('');
  const [selectedValue, setSelectedValue] = useState("1");
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(localStorage.getItem('name'));
  }, []);

  const handleRadioChange = (event) => {
    if (value) {
      setSelectedValue(event.target.value);
    } else {
      setResponseText("Login to use this version");
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    setLoading(true);
    if (!selectedFile) {
      setLoading(false);
      setResponseText("Please provide an image to proceed..");
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile);
    formData.append('model', selectedValue);

    try {
      const response = await axios.post('http://127.0.0.1:5000/process_image', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setLoading(false);
      setResponseText(response.data.text);
    } catch (error) {
      setLoading(false);
      console.error('Error uploading image:', error);
    }
  };

  return (
    <>
      <NavBar />
      <Box className="home-container" p={4} textAlign="center">
        <Typography variant="h4" gutterBottom>Pneumonia Prediction Project</Typography>
        {value && <Typography variant="h6">Welcome {value}</Typography>}
        <Typography>
          Upload x-ray image for pneumonia prediction
          <br />Supported file types (.jpg , .jpeg)
        </Typography>
        <input 
          accept=".jpg,.jpeg"
          type="file"
          style={{ marginTop: '20px' }}
          onChange={handleFileChange}
          disabled={loading}
        />
        <br /><br />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <RadioGroup value={selectedValue} onChange={handleRadioChange} row>
          <FormControlLabel
            value="1"
            control={<Radio disabled={loading} />}
            label="Pneumonia_detection_model_v1"
          />

          <FormControlLabel
            value="2"
            control={<Radio disabled={loading} />}
            label="Pneumonia_detection_model_v2"
          />
        </RadioGroup>
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={handleUpload}
          disabled={loading}
          sx={{ mt: 2 }}
        >
          Upload and Process Image
        </Button>
        {loading ? <CircularProgress sx={{ mt: 2 }} /> : <Typography className="result" mt={2}>{responseText}</Typography>}
      </Box>
    </>
  );
};

export default ImageUploader;
