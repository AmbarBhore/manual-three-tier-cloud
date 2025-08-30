// src/components/AgentCard.jsx
import React from "react";

function StatusBadge({ status }) {
  const color =
    status?.toLowerCase().includes("active") ? "bg-green-100 text-green-800" :
    status?.toLowerCase().includes("in-active") ? "bg-yellow-100 text-yellow-800" :
    "bg-gray-100 text-gray-800";

  return (
    <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded ${color}`}>
      {status}
    </span>
  );
}

export default function AgentCard({ agent }) {
  return (
    <div className="bg-white shadow-sm rounded-lg p-4 border">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-md bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold">
              {agent.name ? agent.name.split(" ").map(s=>s[0]).join("").slice(0,2) : "AG"}
            </div>
            <div>
              <div className="text-lg font-semibold">{agent.name || "Unnamed Agent"}</div>
              <div className="text-xs text-gray-500">{agent.ip_address || "IP: —"}</div>
            </div>
          </div>
        </div>
        <div className="text-right">
          <StatusBadge status={agent.status || "unknown"} />
          <div className="text-xs text-gray-400 mt-2">id: {agent.id}</div>
        </div>
      </div>
    </div>
  );
}
