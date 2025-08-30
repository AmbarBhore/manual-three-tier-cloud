import React, { useEffect, useState } from "react";
import apiClient from "../api/apiClient";
import AgentCard from "./AgentCard";

export default function AgentList() {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    apiClient.get("/agents")
      .then(response => setAgents(response.data))
      .catch(error => console.error("Error fetching agents:", error));
  }, []);

  const handleAddAgent = () => {
    const newAgent = {
      name: `Agent-${agents.length + 1}`,
      status: Math.random() > 0.5 ? "active" : "inactive"
    };

    apiClient.post("/agents", newAgent)
      .then(response => setAgents([...agents, response.data]))
      .catch(error => console.error("Error adding agent:", error));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Agent Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {agents.map(agent => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button
          onClick={handleAddAgent}
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Add Agent
        </button>
      </div>
    </div>
  );
}
