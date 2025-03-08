import { useState } from "react";

const PaymentPage = () => {
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("Bank Transfer");
  const [loading, setLoading] = useState(false);

  const handlePayment = () => {
    setLoading(true);
    setTimeout(() => {
      alert(`Payment of $${amount} via ${method} successful!`);
      setLoading(false);
      setAmount("");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-cyan-400">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg border border-cyan-400 w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Payment</h2>

        {/* Payment Amount */}
        <label className="block mb-2">Amount ($)</label>
        <input
          type="number"
          className="w-full p-2 mb-4 rounded bg-gray-800 border border-cyan-400 text-white"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        {/* Payment Method */}
        <label className="block mb-2">Payment Method</label>
        <select
          className="w-full p-2 mb-4 rounded bg-gray-800 border border-cyan-400 text-white"
          value={method}
          onChange={(e) => setMethod(e.target.value)}
        >
          <option>Bank Transfer</option>
          <option>Crypto (BTC, ETH)</option>
          <option>PayPal</option>
          <option>Credit Card</option>
        </select>

        {/* Pay Now Button */}
        <button
          onClick={handlePayment}
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded transition-all duration-300"
          disabled={loading || !amount}
        >
          {loading ? "Processing..." : "Pay Now"}
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
