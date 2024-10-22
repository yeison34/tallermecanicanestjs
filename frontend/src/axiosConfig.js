import axios from "axios";

const api = axios.create({
    baseURL: 'https://87a9-38-51-233-131.ngrok-free.app/'
});

export default api;