import { useState } from "react";

const SetEARobot = () => {
  const [eaFile, setEaFile] = useState(null);
  const [lotSize, setLotSize] = useState("");
  const [risk, setRisk] = useState("");
  const [takeProfit, setTakeProfit] = useState("");
  const [message, setMessage] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && (file.name.endsWith(".ex4") || file.name.endsWith(".ex5"))) {
      setEaFile(file);
      setMessage({ type: "success", text: "✅ EA Robot uploaded successfully!" });
    } else {
      setMessage({ type: "error", text: "❌ Invalid file! Only .ex4 or .ex5 files allowed." });
    }
  };

  const handleSaveSettings = () => {
    if (!eaFile) {
      setMessage({ type: "error", text: "❌ Please upload an EA Robot file." });
      return;
    }
    if (!lotSize || !risk || !takeProfit) {
      setMessage({ type: "error", text: "❌ Please fill all fields!" });
      return;
    }

    setMessage({ type: "success", text: "✅ EA Robot settings saved successfully!" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-cyan-400">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg border border-cyan-400 w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Set EA Robot</h2>

        {/* File Upload */}
        <label className="block mb-2">Upload EA Robot (.ex4 / .ex5)</label>
        <input
          type="file"
          accept=".ex4,.ex5"
          className="w-full p-2 mb-4 rounded bg-gray-800 border border-cyan-400 text-white"
          onChange={handleFileUpload}
        />

        {/* Lot Size */}
        <label className="block mb-2">Lot Size</label>
        <input
          type="number"
          className="w-full p-2 mb-4 rounded bg-gray-800 border border-cyan-400 text-white"
          placeholder="0.01"
          value={lotSize}
          onChange={(e) => setLotSize(e.target.value)}
        />

        {/* Risk Management */}
        <label className="block mb-2">Risk Management (%)</label>
        <input
          type="number"
          className="w-full p-2 mb-4 rounded bg-gray-800 border border-cyan-400 text-white"
          placeholder="2"
          value={risk}
          onChange={(e) => setRisk(e.target.value)}
        />

        {/* Take Profit */}
        <label className="block mb-2">Take Profit (pips)</label>
        <input
          type="number"
          className="w-full p-2 mb-4 rounded bg-gray-800 border border-cyan-400 text-white"
          placeholder="50"
          value={takeProfit}
          onChange={(e) => setTakeProfit(e.target.value)}
        />

        {/* Save Button */}
        <button
          onClick={handleSaveSettings}
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded transition-all duration-300"
        >
          Save Settings
        </button>

        {/* Message */}
        {message && (
          <p className={`mt-4 text-center ${message.type === "success" ? "text-green-400" : "text-red-400"}`}>
            {message.text}
          </p>
        )}
      </div>
    </div>
  );
};

export default SetEARobot;
