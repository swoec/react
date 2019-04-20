/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const BASE_URL = 'http://jsonplaceholder.typicode.com';

export {getAlbums};

function getAlbums() {
    const url = `${BASE_URL}/albums`;
    return axios.get(url).then(response => response.data);
}


