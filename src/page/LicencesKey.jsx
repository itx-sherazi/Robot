import { useState } from "react";

const LicenseKeyPage = () => {
  const [licenseKey, setLicenseKey] = useState("");
  const [message, setMessage] = useState(null);

  const validateLicenseKey = () => {
    // Example: License key should be 16 characters (XXXX-XXXX-XXXX-XXXX)
    const licensePattern = /^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/;

    if (licensePattern.test(licenseKey)) {
      setMessage({ type: "success", text: "✅ License key is valid!" });
    } else {
      setMessage({ type: "error", text: "❌ Invalid license key format!" });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-cyan-400">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg border border-cyan-400 w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">License Key Activation</h2>

        {/* License Key Input */}
        <label className="block mb-2">Enter License Key</label>
        <input
          type="text"
          className="w-full p-2 mb-4 rounded bg-gray-800 border border-cyan-400 text-white"
          placeholder="XXXX-XXXX-XXXX-XXXX"
          value={licenseKey}
          onChange={(e) => setLicenseKey(e.target.value.toUpperCase())}
        />

        {/* Validate Button */}
        <button
          onClick={validateLicenseKey}
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded transition-all duration-300"
        >
          Validate License Key
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

export default LicenseKeyPage;
