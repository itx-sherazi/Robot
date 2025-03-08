import React, { useState } from "react";

const UploadPage = () => {
  const [logo, setLogo] = useState(null);
  const [eaRobot, setEaRobot] = useState(null);

  // Handle logo upload
  const handleLogoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogo(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle EA Robot upload
  const handleEaChange = (event) => {
    const file = event.target.files[0];
    if (file && (file.name.endsWith(".ex4") || file.name.endsWith(".ex5"))) {
      setEaRobot(file.name);
    } else {
      alert("Only .ex4 and .ex5 files are allowed.");
      setEaRobot(null);
    }
  };

  return (
    <div className="min-h-screen bg-black text-cyan-400 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6">Upload Logo & EA Robot</h1>

      {/* Logo Upload Section */}
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-96 text-center border border-cyan-400">
        <h2 className="text-xl font-semibold mb-4">Upload Logo</h2>
        <input
          type="file"
          accept="image/*"
          onChange={handleLogoChange}
          className="block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:border file:border-cyan-400 file:rounded-md file:bg-gray-800 file:text-cyan-400 hover:file:bg-cyan-700"
        />
        {logo && <img src={logo} alt="Logo Preview" className="mt-4 w-32 h-32 object-contain mx-auto border border-cyan-400 rounded" />}
      </div>

      {/* EA Robot Upload Section */}
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-96 text-center border border-cyan-400 mt-6">
        <h2 className="text-xl font-semibold mb-4">Upload EA Robot (.ex4, .ex5)</h2>
        <input
          type="file"
          accept=".ex4,.ex5"
          onChange={handleEaChange}
          className="block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:border file:border-cyan-400 file:rounded-md file:bg-gray-800 file:text-cyan-400 hover:file:bg-cyan-700"
        />
        {eaRobot && <p className="mt-4 text-sm">Uploaded: {eaRobot}</p>}
      </div>
    </div>
  );
};

export default UploadPage;
