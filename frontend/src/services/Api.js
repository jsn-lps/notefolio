import axios from 'axios';


export const CheckApiConn = async () => {
    try {
    const response = await axios.get('http://localhost:8000')
        console.log(response);
        return response
    } catch (error) {
        throw error
    }
}


