import axios from 'axios';

const BASE_URL = 'http://jsonplaceholder.typicode.com/photos?albumId=';

export {getPhotos};

function getPhotos(album) {
    const url = `${BASE_URL}${album}`;
    return axios.get(url).then(response => response.data);
}