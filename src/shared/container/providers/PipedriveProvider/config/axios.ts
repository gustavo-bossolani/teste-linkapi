import axios from 'axios';

const api = axios.create({
  baseURL: 'https://teste-linkapi.pipedrive.com/v1/',
});

export default api;
