import React, { useEffect, useState } from 'react';
import './Search.css';
import SportCard from '../sportCard/SportCard';
import classesAPI from '../../api/classesAPI';

const Search = () => {
    const [name, setName] = useState('');
    const [allResults, setAllResults] = useState([]);
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAllClasses = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await classesAPI.getAll();
                setAllResults(response);
            } catch (error) {
                console.error('Error fetching classes:', error);
                setError('Error fetching classes');
            }
            setLoading(false);
        };

        fetchAllClasses();
    }, []);

    const searchHandler = (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            const filteredData = allResults.filter(card => card.title.toLowerCase().includes(name.toLowerCase()));
            setResults(filteredData);
            setName('');
        } catch (error) {
            console.error('Error filtering search results:', error);
            setError('Error filtering search results');
        }
        setLoading(false);
    };

    return (
        <div className="search-container">
            <h2>Find your Class</h2>
            <form className="search-form" onSubmit={searchHandler}>
                <input
                    type="text"
                    placeholder="Search by name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            <div className="search-results">
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : results.length > 0 ? (
                    results.map((card) => (
                        <div key={card._id} className="result-item">
                            <SportCard card={card} />
                        </div>
                    ))
                ) : (
                    <p>No results found</p>
                )}
            </div>
        </div>
    );
};

export default Search;
