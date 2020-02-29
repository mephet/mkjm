import axios from 'axios';

export async function sendClientAllocation(data) {
    const url = `${process.env.REACT_APP_API_ENDPOINT}/projects/api/optimization`;
    const response = await axios.post(
        url,
        data
    )

    return await response.data;
}

export async function test() {
    const url = `${process.env.REACT_APP_API_ENDPOINT}/projects/api/test`;
    const response = await axios.get(url)
    return response;
}