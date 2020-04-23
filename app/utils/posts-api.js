/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const BASE_URL = 'http://jsonplaceholder.typicode.com';

export {getPosts};

function getPosts() {
    const url = `${BASE_URL}/posts`;
    return axios.get(url).then(response => response.data);
}


