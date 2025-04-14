import axios from 'axios'

const apiUrl = axios.create({
    baseURL:'http://localhost:4500'
})
export default apiUrl