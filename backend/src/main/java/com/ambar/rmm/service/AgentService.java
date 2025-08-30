package com.ambar.rmm.service;

import com.ambar.rmm.model.Agent;
import com.ambar.rmm.repository.AgentRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AgentService {

    private final AgentRepository agentRepository;

    public AgentService(AgentRepository agentRepository) {
        this.agentRepository = agentRepository;
    }

    // Get all agents
    public List<Agent> getAllAgents() {
        return agentRepository.findAll();
    }

    // Create new agent
    public Agent createAgent(Agent agent) {
        return agentRepository.save(agent);
    }

    // Get agent by ID
    public Optional<Agent> getAgentById(Long id) {
        return agentRepository.findById(id);
    }

    // Update agent
    public Agent updateAgent(Long id, Agent updatedAgent) {
        return agentRepository.findById(id)
                .map(agent -> {
                    agent.setName(updatedAgent.getName());
                    agent.setStatus(updatedAgent.getStatus());
                    return agentRepository.save(agent);
                })
                .orElseThrow(() -> new RuntimeException("Agent not found with id " + id));
    }

    // Delete agent
    public void deleteAgent(Long id) {
        agentRepository.deleteById(id);
    }
}
