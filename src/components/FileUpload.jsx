// src/components/FileUpload.jsx

import React, { useState } from 'react';
import { Button } from './index';

function FileUpload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }
    try {
      // Perform the file upload using your backend service
      await fakeBackendUpload(file);  // Replace with actual backend call
      alert("File uploaded successfully!");
    } catch (error) {
      alert(`Error uploading file: ${error.message}`);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">File Upload</h2>
      <input type="file" onChange={handleFileChange} />
      <Button onClick={handleFileUpload} className="mt-4">
        Upload File
      </Button>
    </div>
  );
}

export default FileUpload;
