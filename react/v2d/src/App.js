import React from 'react';
import ImageUploader from './components/ImageUploader';
import HomePage from './components/HomePage';
import CryptoDonationPage from './components/CryptoDonationPage';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
const App = () => {
  return (
    <div>
      <BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage/>} />
				<Route path="/ImageUploader" element={<ImageUploader/>} />
        <Route path="/DonationPage" element={<CryptoDonationPage/>} />
			</Routes>
		</BrowserRouter>
    </div>
  );
};

export default App;
