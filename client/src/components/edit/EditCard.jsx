import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './Edit.module.css';
import useForm from '../../hooks/UseForm';
import { useGetOneClass } from '../../hooks/UseClasses';
import classesAPI from '../../api/classesAPI';


export default function EditCard() {
    const navigate = useNavigate()
    const { classId } = useParams();
    const [classData, setClassData] = useGetOneClass(classId)

    const {
        changeHandler,
        submitHandler,
        values,
    } = useForm(classData, async (values) => {
        await classesAPI.edit(classId, values);
        navigate(`/classes/${classId}/details`)
    });

    return (
        <div className={styles.editCardContainer}>
            <div className={styles.editCardBox}>
                <h2>Edit Class</h2>
                <form onSubmit={submitHandler}>
                    <div className={styles.formGroup}>
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
                    <div className={styles.formGroup}>
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
                    <div className={styles.formGroup}>
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
                    <div className={styles.formGroup}>
                        <label htmlFor="description">Description</label>
                        <textarea
                            name='description'
                            id="description"
                            value={values.description}
                            onChange={changeHandler}
                            required
                        />
                    </div>
                    <button >Save Changes</button>
                </form>
            </div>
        </div>
    );
}
