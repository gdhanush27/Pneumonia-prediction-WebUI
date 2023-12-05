// src/CryptoDonationPage.js
import React, { useEffect } from 'react';
import CopyToClipboardButton from '../components/CopyToClipboardButton';
import './CryptoDonationPage.css';
import { Link } from 'react-router-dom';

const CryptoDonationPage = () => {
  const cryptoWalletAddress = '0x3e5c823b3D91e16C9E1fbb4A4CFfED10d8396935'; // Replace with your actual cryptocurrency wallet address

  useEffect(() => {
    return () => {
      document.title = 'Donation Page';
    };
  }, []);
  
  return (
    <>
    <div className="crypto-donation-container">
      <h2 className="crypto-donation-title">Donate via Crypto Wallet</h2><br/>
      <p className="crypto-donation-text">
        Thank you for considering a cryptocurrency donation to support our cause! Your contributions help us make a positive impact.
      </p>
      <p className="crypto-donation-text">
        To donate, please use the following cryptocurrency wallet address:
      </p>
      <div className="crypto-wallet-address">
        <strong>Bitcoin (BTC):</strong>
        {cryptoWalletAddress}
        <CopyToClipboardButton text={cryptoWalletAddress} />
      </div>
      <div className="crypto-wallet-address">
        <strong>Ethereum (ETH):</strong>
        {cryptoWalletAddress}
        <CopyToClipboardButton text={cryptoWalletAddress} />
      </div>
      <p className="crypto-donation-text">
        Your generosity is greatly appreciated! Feel free to reach out if you have any questions or need assistance with the donation process.
      </p>
      <p className="crypto-thank-you">
        Thank you for supporting our cause!
      </p>
      </div><div>
      <section >
      <Link to="/" className="upload-link">
          Home page    
        </Link>
        </section>
        <section>
        <Link to="/ImageUploader" className="upload-link">
        Image Uploader
        </Link>
      </section>
    </div></>
  );
};

export default CryptoDonationPage;
