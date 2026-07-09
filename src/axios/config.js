import axios from "axios";

const api = axios.create({
    baseURL: 'https://jogodaonca-etdagnb0dqhmc7d8.brazilsouth-01.azurewebsites.net',
    // baseURL: ""
    headers: {
        "Content-Type": "application/json",
    }
});

export default api;