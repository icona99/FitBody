import * as request from './requester'

const BASE_URL = 'http://localhost:3030/data/classes'

export const getAll = () => request.get(BASE_URL);


export const getOne = (classId) => request.get(`${BASE_URL}/${classId}`);

export const create = (classData) => request.post(`${BASE_URL}`, classData);

export const remove = (classId) => request.remove(`${BASE_URL}/${classId}`);

const classesAPI = {
    getAll,
    getOne,
    create,
    remove
}

export default classesAPI
