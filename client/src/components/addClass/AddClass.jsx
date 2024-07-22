import React, { useState } from 'react';
import './addClass.css';

const AddClass = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [level, setLevel] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3030/classes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title,
                    level,
                    description,
                    image
                })
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data);
            alert('Class added successfully');
            setTitle('');
            setDescription('');
            setImage('');
            setLevel('');
        } catch (error) {
            console.error('Error adding class:', error);
            alert('Error adding class');
        }
    };

    return (
        <div className="add-class-container">
            <div className="add-class-box">
                <h2>Add New Class</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="image">Image</label>
                        <input
                            type="text"
                            id="image"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="level">Level</label>
                        <select
                            id="level"
                            value={level}
                            onChange={(e) => setLevel(e.target.value)}
                            required
                        >
                            <option value="" disabled>Select level</option>
                            <option value="beginner">Beginner</option>
                            <option value="advanced">Advanced</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit">Add Class</button>
                </form>
            </div>
        </div>
    );
};

export default AddClass;
