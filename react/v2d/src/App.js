import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import HomePage from './pages/HomePage';
import ImageUploader from './pages/ImageUploader';
const App = () => {
  return (
    <div>
      <BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage/>} />
				<Route path="/ImageUploader" element={<ImageUploader/>} />
			</Routes>
		</BrowserRouter>
    </div>
  );
};

export default App;
