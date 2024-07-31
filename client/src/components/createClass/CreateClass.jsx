import React from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/UseForm';
import './createClass.css';
import { useCreateClass } from '../../hooks/UseClasses';

const initialValues = {
    title: '',
    description: '',
    level: '',
    image: ''
};

const CreateClass = () => {
    const navigate = useNavigate();
    const createClass = useCreateClass();

    const createHandler = async (values) => {
        try {
            const { _id: classId } = await createClass(values);
            navigate(`/classes`);
        } catch (error) {
            alert(error.message);
        }
    };

    const {
        values,
        changeHandler,
        submitHandler,
    } = useForm(initialValues, createHandler);

    return (
        <div className="add-class-container">
            <div className="add-class-box">
                <h2>Add New Class</h2>
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label htmlFor="image">Image</label>
                        <input
                            name='image'
                            type="text"
                            id="image"
                            value={values.image}
                            onChange={changeHandler}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                            name='title'
                            type="text"
                            id="title"
                            value={values.title}
                            onChange={changeHandler}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="level">Level</label>
                        <select
                            name='level'
                            id="level"
                            value={values.level}
                            onChange={changeHandler}
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
                            name='description'
                            id="description"
                            value={values.description}
                            onChange={changeHandler}
                            required
                        />
                    </div>
                    <button type="submit">Add Class</button>
                </form>
            </div>
        </div>
    );
};

export default CreateClass;