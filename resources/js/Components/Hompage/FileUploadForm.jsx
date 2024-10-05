import React, { useState } from 'react';

const FileUploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!selectedFile) {
      alert("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    // Send formData to server
    fetch('/upload', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      alert("File uploaded successfully");
    })
    .catch(error => {
      console.error("Error uploading file:", error);
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <div className="text-center">
        <label htmlFor="fileUpload" className="block mb-2">Upload File</label>
        <div className='card card-body mb-2'>
          <input
            type="file"
            id="fileUpload"
            onChange={handleFileChange}
            className="block"
          />
        </div>
      </div>
      <div className='mt-4'>
        <button className="btn btn-active btn-accent" type="submit">Submit</button>
      </div>
    </form>
  );
};

export default FileUploadForm;
