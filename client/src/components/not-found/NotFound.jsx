import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'; // Import the CSS file

export default function NotFound() {
    return (
        <div className="not-found">
            <div className="not-found-content">
                <h1>404</h1>
                <div className='animation'>Oops! Sixpack not found.</div>
                <p>Back to <Link to="/">homepage</Link></p>
            </div>
        </div>
    );
}

