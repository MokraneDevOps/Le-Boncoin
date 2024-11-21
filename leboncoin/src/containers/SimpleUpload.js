import React, { useState } from "react";

function SimpleUpload({ loadFiles }) {
  const [file, setFile] = useState([]);

  function handleChange(e) {
    const filesArray = Array.from(e.target.files);
    const previews = filesArray.map((f) => URL.createObjectURL(f));
    setFile(previews);
    loadFiles(filesArray);
  }

  return (
    <div>
      <input type="file" onChange={handleChange} multiple />
      <div className="preview-container">
        {file.map((f, index) => (
          <img src={f} alt={`preview-${index}`} className="preview-img" />
        ))}
      </div>
    </div>
  );
}

export default SimpleUpload;
