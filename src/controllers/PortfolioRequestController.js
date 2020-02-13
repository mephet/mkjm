import axios from 'axios';

export async function sendClientAllocation(data) {
    const url = 'http://localhost:5000/api/optimization';
    const response = await axios.post(
        url,
        data
    )

    console.log(response);
};

export async function test() {
    const response = await axios.get('http://localhost:5000/test')
    console.log(response)
}