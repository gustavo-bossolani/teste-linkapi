import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.pipedrive.com/v1/',
});

export default api;
