import React from "react";
import Agents from "./components/Agents";

function App() {
  return (
    <div>
      <h1>RMM Frontend</h1>
      <p>Welcome to RMM System. This is your remote monitoring and management dashboard.</p>
      <button>Get Started</button>
      
      <Agents /> {/* Agents table + form */}
    </div>
  );
}

export default App;
