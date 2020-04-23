/* eslint camelcase:0 */
import _ from 'lodash';
import {random as randomStarWarsName} from 'starwars-names';


export {getPosts, getMockPosts, getMockPost};

function getPosts() {
    return Promise.resolve({
        data: getMockPosts(),
    });
}

function getMockPosts(number = _.random(1, 40)) {
    return _.times(number, () => getMockPost());
}

function getMockPost(overrides = {}) {
    const name = overrides.name || _.kebabCase(randomStarWarsName());
    return {
        id: _.uniqueId(),
        userId: _.random(1, 200),
        title: name,
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"


    };
}

