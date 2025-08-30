// src/api/agents.js
import apiClient from "./apiClient";

// Fetch all agents
export const getAgents = async () => {
  try {
    const response = await apiClient.get("/agents");
    return response.data;
  } catch (error) {
    console.error("Error fetching agents:", error);
    return [];
  }
};

// Add a new agent
export const addAgent = async (agent) => {
  try {
    await apiClient.post("/agents", agent);
  } catch (error) {
    console.error("Error adding agent:", error);
  }
};

