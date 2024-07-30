import React, { useState } from 'react';
import './Search.css';

const Search = () => {
  const [name, setName] = useState('');
  const [level, setLevel] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const buildQuery = (params) => {
    let query = [];
    if (params.name) query.push(`name=%22${encodeURIComponent(params.name)}%22`);
    if (params.level) query.push(`level=%22${encodeURIComponent(params.level)}%22`);
    return query.length ? `where=${query.join(' AND ')}` : '';
  };

  const fetchResults = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`http://localhost:3030/classes?${query}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setResults(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error fetching search results:', error);
      setError('Error fetching search results');
    }
    setLoading(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const query = buildQuery({ name, level });
    fetchResults(query);
  };

  return (
    <div className="search-container">
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search by name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Search by level"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className="search-results">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          results.map((result) => (
            <div key={result.id} className="result-item">
              <h3>{result.name}</h3>
              <p>Level: {result.level}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Search;
