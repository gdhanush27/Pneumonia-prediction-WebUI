import React, { useState, useRef } from 'react';
import './FileInput.css';

const FileInput = ({ initialUrl = '' }) => {
  const [previewPhoto, setPreviewPhoto] = useState(initialUrl);
  const [fileName, setFileName] = useState(null);
  const emptyText = initialUrl ? 'No new file chosen' : 'No file chosen';
  const fileInputRef = useRef(null);

  const updatePreview = () => {
    const files = fileInputRef.current.files;
    if (files.length > 0) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewPhoto(e.target.result);
        setFileName(files[0].name);
      };
      reader.readAsDataURL(files[0]);
    }
  };

  const clearPreview = () => {
    fileInputRef.current.value = '';
    setPreviewPhoto(initialUrl);
    setFileName(null);
  };

  return (
    <section className="container max-w-xl mx-auto flex flex-col py-8">
      <h1 className="text-xl font-black">Custom File Input: Image</h1>

      <div className="py-8">
        <p className="block text-sm leading-5 font-medium text-gray-700 mb-4">Custom file input</p>
        <div className="file-input flex items-center">
          <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
            {!previewPhoto ? (
              <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <img src={previewPhoto} alt="Preview" className="h-12 w-12 object-cover" />
            )}
          </div>

          <div className="flex items-center">
            <div className="ml-5 rounded-md shadow-sm">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={updatePreview}
              />
              <label
                className="py-2 px-3 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-500 hover:border-indigo-300 transition duration-150 ease-in-out cursor-pointer"
                onClick={() => fileInputRef.current.click()}
              >
                Upload Photo
              </label>
            </div>

            <div className="flex items-center text-sm text-gray-500 mx-2">
              <span>{fileName || emptyText}</span>
              {fileName && (
                <button
                  type="button"
                  aria-label="Remove image"
                  onClick={clearPreview}
                  className="mx-1 mt-1"
                >
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="py-8">
        <label className="block text-sm leading-5 font-medium text-gray-700 mb-4">Default file input</label>
        <input type="file" className="border p-2" />
      </div>
    </section>
  );
};

export default FileInput;
