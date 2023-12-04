import React from 'react';
import Login from './components/login';
import ImageUploader from './components/ImageUploader';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
const App = () => {
  return (
    <div>
      <BrowserRouter>
			<Routes>
				<Route path="/" element={<Nav/>} />
				<Route path="/ImageUploader" element={<ImageUploader/>} />
				<Route path="/Login" element={<Login/>} />
			</Routes>
		</BrowserRouter>
    </div>
  );
};

export default App;
