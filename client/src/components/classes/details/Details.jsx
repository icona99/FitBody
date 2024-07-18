import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailsCard from './DetailsCard';

const baseUrl = `http://localhost:3030/jsonstore`;

const Details = () => {
    const { id } = useParams();
    const [card, setCard] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async function fetchCard() {
            try {
                const response = await fetch(`${baseUrl}/classes/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                console.log('Fetched Data:', result); 
                setCard(result); 
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false); 
            }
        })();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>; 
    }

    if (!card) {
        return <div>No data found</div>; 
    }

    return <DetailsCard card={card} />;
};

export default Details;
