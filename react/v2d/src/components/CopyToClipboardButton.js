// src/CopyToClipboardButton.js
import React, { useState } from 'react';

const CopyToClipboardButton = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);

    // Reset the "Copied" state after a short delay
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  return (
    <button onClick={handleCopyClick}>
      {isCopied ? 'Copied!' : 'Click to Copy'}
    </button>
  );
};

export default CopyToClipboardButton;
