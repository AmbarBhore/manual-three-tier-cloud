// src/components/Navbar.jsx
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 text-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L20 7v7c0 5-4 9-8 9s-8-4-8-9V7l8-5z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </div>
          <div>
            <div className="font-semibold text-lg">RMM Dashboard</div>
            <div className="text-xs text-white/80">Remote Monitoring & Management (sample)</div>
          </div>
        </div>

        <nav className="flex items-center gap-4 text-sm">
          <a className="hover:underline" href="#">Agents</a>
          <a className="hover:underline" href="#">Tenants</a>
          <button className="ml-2 bg-white/20 px-3 py-1 rounded hover:bg-white/30">Sign in</button>
        </nav>
      </div>
    </header>
  );
}
