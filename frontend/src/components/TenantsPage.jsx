import React, { useState, useEffect } from 'react';
import apiClient from '../api/apiClient';

function TenantsPage() {
  const [tenants, setTenants] = useState([]);
  const [newTenant, setNewTenant] = useState('');

  useEffect(() => {
    fetchTenants();
  }, []);

  const fetchTenants = async () => {
    const res = await apiClient.get('/tenants');
    setTenants(res.data);
  };

  const addTenant = async () => {
    if (!newTenant) return;
    await apiClient.post('/tenants', { name: newTenant });
    setNewTenant('');
    fetchTenants();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Tenants</h2>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Tenant Name"
          value={newTenant}
          onChange={(e) => setNewTenant(e.target.value)}
          className="border p-2 mr-2 flex-grow"
        />
        <button
          onClick={addTenant}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>
      <ul className="bg-white shadow rounded p-4">
        {tenants.map((tenant) => (
          <li key={tenant.id} className="border-b py-2">{tenant.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default TenantsPage;
