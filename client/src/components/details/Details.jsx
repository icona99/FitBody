import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailsCard from '../cardDetails/DetailsCard';

const baseUrl = `http://localhost:3030/data`;

const Details = () => {
    const { id } = useParams();
    const [card, setCard] = useState(null);

    useEffect(() => {
        (async function fetchCard() {
            try {
                const response = await fetch(`${baseUrl}/classes/${id}`);
                const result = await response.json();
                setCard(result); 
            } catch (error) {
                alert(error.message);
            }
        })();
    }, [id]);

    return <DetailsCard card={card} />;
};

export default Details;
