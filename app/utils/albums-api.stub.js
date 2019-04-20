/* eslint camelcase:0 */
import _ from 'lodash';
import {random as randomStarWarsName} from 'starwars-names';


export {getAlbums, getMockAlbums, getMockAlbum};

function getAlbums() {
    return Promise.resolve({
        data: getMockAlbums(),
    });
}

function getMockAlbums(number = _.random(1, 40)) {
    return _.times(number, () => getMockAlbum());
}

function getMockAlbum(overrides = {}) {
    const name = overrides.name || _.kebabCase(randomStarWarsName());
    return {
        id: _.uniqueId(),
        userId: _.random(1, 200),
        title: name,


    };
}

