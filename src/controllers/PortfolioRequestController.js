import axios from 'axios';

export async function sendClientAllocation(data) {
    
    // const url = `/projects/api/optimization`;
    const url = `${process.env.REACT_APP_API_ENDPOINT}/projects/api/optimization`;
    console.log(url);
    const response = await axios.post(
        url,
        data
    )

    return await response.data;
}

export async function test() {
    // const url = `/projects/api/test`;
    const url = `${process.env.REACT_APP_API_ENDPOINT}/projects/api/test`;
    const response = await axios.get(url)
    return response;
}