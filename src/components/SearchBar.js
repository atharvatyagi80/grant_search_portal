import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query) {
      onSearch(query); // Trigger search when query is entered
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        placeholder="Enter your search query"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
