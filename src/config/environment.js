const API_BASE_URL = import.meta.env.PROD 
  ? import.meta.env.VITE_API_URL_PROD || 'https://seu-backend-railway.railway.app'
  : import.meta.env.VITE_API_URL || 'http://localhost:8080';

export { API_BASE_URL };