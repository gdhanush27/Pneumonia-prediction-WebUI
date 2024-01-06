import React from 'react';
import ImageUploader from './pages/ImageUploader';
import SignIn from './components/googleSignin/signIn';
import CryptoDonationPage from './pages/CryptoDonationPage';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
const App = () => {
  return (
    <div>
      <BrowserRouter>
			<Routes>
				<Route path="/" element={<SignIn/>} />
				<Route path="/ImageUploader" element={<ImageUploader/>} />
        <Route path="/DonationPage" element={<CryptoDonationPage/>} />
			</Routes>
		</BrowserRouter>
    </div>
  );
};

export default App;
