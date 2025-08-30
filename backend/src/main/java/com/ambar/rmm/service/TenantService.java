package com.ambar.rmm.service;

import com.ambar.rmm.model.Tenant;
import com.ambar.rmm.repository.TenantRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TenantService {

    private final TenantRepository tenantRepository;

    public TenantService(TenantRepository tenantRepository) {
        this.tenantRepository = tenantRepository;
    }

    public List<Tenant> getAllTenants() {
        return tenantRepository.findAll();
    }

    public Tenant createTenant(Tenant tenant) {
        return tenantRepository.save(tenant);
    }
}
