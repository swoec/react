/* eslint camelcase:0 */
import _ from 'lodash';
import {random as randomStarWarsName} from 'starwars-names';


export {getPhotos, getMockPhotos, getMockPhoto};

function getPhotos() {
    return Promise.resolve({
        data: getMockPhotos(),
    });
}

function getMockPhotos(number = _.random(1, 40)) {
    return _.times(number, () => getMockPhoto());
}

function getMockPhoto(overrides = {}) {
    const name = overrides.name || _.kebabCase(randomStarWarsName());

    return {
        id: _.uniqueId(),
        userId: _.random(1, 200),
        albumId: 1,
        title: name,
        url: "https://via.placeholder.com/600/92c952",
        thumbnailUrl: "https://via.placeholder.com/150/92c952",


    };
}
