import axios from 'axios';

export const API_BASE_URL = import.meta.env.MODE === 'production' 
  ? 'https://api.mygominds.com' 
  : 'http://localhost:3000';

const api = axios.create({
  baseURL: import.meta.env.MODE === 'production' 
    ? 'https://api.mygominds.com' 
    : '', // In development, the empty string allows Vite proxy to intercept /api requests
});

export const getImageUrl = (path) => {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  
  // Use the full base URL instead of relative proxy, to avoid any proxy/deployment issues
  return `${API_BASE_URL}${path}`;
};

export default api;
