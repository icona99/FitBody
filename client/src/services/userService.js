const baseUrl = `http://localhost:3030/jsonstore/sports`;

export const getAll = async () => {
    try {
        const response = await fetch(baseUrl);
        const result = await response.json()
    } catch (error) {
        console.log(error);
    }

}