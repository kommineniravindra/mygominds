import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.MODE === 'production' 
    ? 'https://api.mygominds.com' 
    : '', // In development, the empty string allows Vite proxy to intercept /api requests
});

export default api;
