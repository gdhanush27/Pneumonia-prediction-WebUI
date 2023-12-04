import React from 'react';
import Login from './components/login';
import ImageUploader from './components/ImageUploader';
import HomePage from './components/HomePage';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
const App = () => {
  return (
    <div>
      <BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage/>} />
				<Route path="/ImageUploader" element={<ImageUploader/>} />
				<Route path="/Login" element={<Login/>} />
			</Routes>
		</BrowserRouter>
    </div>
  );
};

export default App;
