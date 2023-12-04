import React from 'react';
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
			</Routes>
		</BrowserRouter>
    </div>
  );
};

export default App;
