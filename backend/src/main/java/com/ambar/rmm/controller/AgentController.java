package com.ambar.rmm.controller;

import com.ambar.rmm.model.Agent;
import com.ambar.rmm.repository.AgentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/agents")
@CrossOrigin(origins = "*")
public class AgentController {

    @Autowired
    private AgentRepository agentRepository;

    @GetMapping
    public List<Agent> getAllAgents() {
        return agentRepository.findAll();
    }

    @PostMapping
    public Agent createAgent(@RequestBody Agent agent) {
        return agentRepository.save(agent);
    }
}
