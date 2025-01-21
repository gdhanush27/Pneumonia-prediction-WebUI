import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import HomePage from './pages/HomePage';
import ImageUploader from './pages/ImageUploader';
import Test from './components/Test';
const App = () => {
  return (
    <div>
      <BrowserRouter>
			<Routes>
        <Route path="/Test" element={<Test/>} />
				<Route path="/" element={<HomePage/>} />
        <Route path="/home" element={<HomePage/>} />
				<Route path="/ImageUploader" element={<ImageUploader/>} />
			</Routes>
		</BrowserRouter>
    </div>
  );
};

export default App;
