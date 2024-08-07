import { useEffect, useState } from 'react';

export default function useForm(initialValues, submitCallback) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState(null);

    useEffect(() => {
        setValues(initialValues);
    }, [initialValues]);

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        setErrors(null); 

        try {
            await submitCallback(values);
        } catch (error) {
            setErrors(error.message); 
        }
    };

    return {
        values,
        changeHandler,
        submitHandler,
        errors
    };
}

