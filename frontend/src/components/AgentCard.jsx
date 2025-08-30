import React from "react";

export default function AgentCard({ agent }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border hover:shadow-lg transition-shadow">
      <h2 className="text-lg font-semibold text-gray-800">{agent.name}</h2>
      <p
        className={`mt-2 font-medium ${
          agent.status === "active" ? "text-green-600" : "text-red-500"
        }`}
      >
        Status: {agent.status}
      </p>
    </div>
  );
}
