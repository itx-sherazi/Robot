import React from "react";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-black text-cyan-400">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 p-5 hidden md:block border-r border-cyan-400">
        <h2 className="text-2xl font-bold mb-5">My FX Traders</h2>
        <ul>
          <li className="py-2 px-4 border-b border-cyan-400">Dashboard</li>
          <li className="py-2 px-4 border-b border-cyan-400">Trades</li>
          <li className="py-2 px-4 border-b border-cyan-400">Analytics</li>
          <li className="py-2 px-4 border-b border-cyan-400">Settings</li>
        </ul>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 p-5">
        <header className="text-3xl font-bold border-b border-cyan-400 pb-3 mb-5">
          My FX Traders Portal
        </header>
        <p>Welcome to your trading dashboard.</p>
      </main>
    </div>
  );
};

export default Dashboard;
