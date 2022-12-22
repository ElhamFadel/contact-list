const axios = require('axios').default;
const API_URL = 'https://randomuser.me/api/';

const USERS_HTTP_REQUEST = axios.create({
  baseURL: API_URL,
  params: {
    api_key: API_URL,
  },
});

export {USERS_HTTP_REQUEST, API_URL};
