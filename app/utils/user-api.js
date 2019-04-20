/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const BASE_URL = 'http://jsonplaceholder.typicode.com/users/';

export {getUser};

function getUser(userId) {
    const url = `${BASE_URL}${userId}`;
    return axios.get(url).then(response => response.data);
}