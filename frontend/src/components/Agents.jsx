import React, { useState, useEffect } from "react";
import { getAgents, addAgent } from "../api/agents";

function Agents() {
  const [agents, setAgents] = useState([]);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("active");
  const [ip, setIp] = useState("");

  useEffect(() => {
    fetchAgents();
  }, []);

  const fetchAgents = async () => {
    const data = await getAgents();
    setAgents(data);
  };

  const handleAddAgent = async () => {
    if (!name.trim()) return alert("Agent name required!");
    await addAgent({ name, status, ip_address: ip });
    setName("");
    setStatus("active");
    setIp("");
    fetchAgents();
  };

  return (
    <div className="bg-white shadow-lg border border-blue-300 rounded-2xl p-6">
      {/* Header */}
      <h2 className="text-xl font-semibold mb-4 text-blue-700 border-b pb-2">
        Agents
      </h2>

      {/* Add Agent Form */}
      <div className="flex flex-wrap gap-3 mb-6 items-center">
        <input
          type="text"
          placeholder="Agent Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-blue-400 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border border-blue-400 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
        >
          <option value="active">Active</option>
          <option value="in-active">Inactive</option>
        </select>
        <input
          type="text"
          placeholder="IP Address"
          value={ip}
          onChange={(e) => setIp(e.target.value)}
          className="border border-blue-400 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleAddAgent}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg shadow"
        >
          Add Agent
        </button>
      </div>

      {/* Agents Table */}
      <div className="overflow-x-auto">
        <table className="w-full border border-blue-300 rounded-lg shadow-sm">
          <thead className="bg-blue-100 text-blue-800">
            <tr>
              <th className="border border-blue-300 px-4 py-2 text-left">ID</th>
              <th className="border border-blue-300 px-4 py-2 text-left">Name</th>
              <th className="border border-blue-300 px-4 py-2 text-left">Status</th>
              <th className="border border-blue-300 px-4 py-2 text-left">IP Address</th>
            </tr>
          </thead>
          <tbody>
            {agents.map((agent) => (
              <tr key={agent.id} className="hover:bg-blue-50">
                <td className="border border-blue-200 px-4 py-2">{agent.id}</td>
                <td className="border border-blue-200 px-4 py-2">{agent.name}</td>
                <td
                  className={`border border-blue-200 px-4 py-2 font-medium ${
                    agent.status === "active" ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {agent.status}
                </td>
                <td className="border border-blue-200 px-4 py-2">
                  {agent.ip_address || "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Agents;
