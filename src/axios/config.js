import axios from "axios";

const api = axios.create({
    baseURL: 'https://jogo-on-a-production.up.railway.app/',
    // baseURL: ""
    headers: {
        "Content-Type": "application/json",
    }
});

export default api;