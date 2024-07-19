import React, { useState } from 'react';
import './addClass.css'

const AddClass = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [level, setLevel] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3030/classes', {
                title,
                level,
                description,
                image
            });
            console.log(response.data);
            alert('Class added successfully');
            setTitle('');
            setDescription('');
            setImage('');
        } catch (error) {
            console.error(error);
            alert('Error adding class');
        }
    };

    return (
        <div className="add-class-container">
            <div className="add-class-box">
                <h2>Add New Class</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="image">Image URL</label>
                        <input
                            type="text"
                            id="image"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">Class Title</label>
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
                        <input
                            type="text"
                            id="level"
                            value={level}
                            onChange={(e) => setLevel(e.target.value)}
                            required
                        />
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
