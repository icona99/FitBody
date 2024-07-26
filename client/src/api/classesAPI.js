import * as request from './requester'

const BASE_URL = 'http://localhost:3030/data/classes'

export const getAll = async () => {
    const result = await request.get(BASE_URL)
    const cards = Object.values(result);

    return cards;
}

export const getOne = (classId) => request.get(`${BASE_URL}/${classId}`);

const classesAPI={
    getAll,
    getOne
}

export default classesAPI
