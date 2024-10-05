import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import GrantList from './components/GrantList';
import ActionButtons from './components/ActionButtons';
import './App.css';

function App() {
  const [grants, setGrants] = useState([]); // List of grants
  const [selectedGrant, setSelectedGrant] = useState(null); // Selected grant

  // Simulate fetching grants from the backend based on search
  const searchGrants = (query) => {
    // Simulated backend response with sample grants
    const sampleGrants = [
      { id: 1, title: 'Grant 1: Education' },
      { id: 2, title: 'Grant 2: Healthcare' },
      { id: 3, title: 'Grant 3: Research' },
    ];
    setGrants(sampleGrants); // Replace this with actual API call
  };

  // Handle when a user clicks a grant
  const selectGrant = (grant) => {
    setSelectedGrant(grant);
  };

  return (
    <div className="App">
      <h1>Grant Search Portal</h1>

      {/* Search Bar */}
      <SearchBar onSearch={searchGrants} />

      {/* Grant List */}
      {grants.length > 0 && (
        <GrantList grants={grants} onGrantSelect={selectGrant} />
      )}

      {/* Action Buttons for PDF and Application Submission */}
      {selectedGrant && (
        <ActionButtons selectedGrant={selectedGrant} />
      )}
    </div>
  );
}

export default App;
