package com.ambar.rmm.model;

import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name = "agents")
public class Agent {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "ip_address")
    @JsonProperty("ip_address")
    private String ipAddress;

    @Column(name = "name")
    private String name;

    @Column(name = "status")
    private String status;

    public Agent() {}

    public Agent(String ipAddress, String name, String status) {
        this.ipAddress = ipAddress;
        this.name = name;
        this.status = status;
    }

    public Long getId() {
        return id;
    }

    public String getIpAddress() {
        return ipAddress;
    }

    public void setIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
