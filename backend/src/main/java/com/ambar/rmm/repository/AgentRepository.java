package com.ambar.rmm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.ambar.rmm.model.Agent;

@Repository
public interface AgentRepository extends JpaRepository<Agent, Long> {
}
