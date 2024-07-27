import * as request from './requester'

const BASE_URL = 'http://localhost:3030/data/classes'

export const getAll = () => request.get(BASE_URL);


export const getOne = (classId) => request.get(`${BASE_URL}/${classId}`);

export const create = (classData) => request.post(`${BASE_URL}`, classData);

const classesAPI = {
    getAll,
    getOne,
    create,
}

export default classesAPI
