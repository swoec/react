/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const BASE_URL = 'http://jsonplaceholder.typicode.com/comments?postId=';

export {getComments};

function getComments(post) {
    const url = `${BASE_URL}${post}`;
    return axios.get(url).then(response => response.data);
}
