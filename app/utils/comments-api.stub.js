/* eslint camelcase:0 */
import _ from 'lodash';
import {random as randomStarWarsName} from 'starwars-names';


export {getComments, getMockComments, getMockComment};

function getComments() {
    return Promise.resolve({
        data: getMockComments(),
    });
}

function getMockComments(number = _.random(1, 40)) {
    return _.times(number, () => getMockComment());
}

function getMockComment(overrides = {}) {
    const name = overrides.name || _.kebabCase(randomStarWarsName());

    return {
        id: _.uniqueId(),
        userId: _.random(1, 200),
        postId: 1,
        name: name,
        email: "Eliseo@gardner.biz",
        body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"


    };
}
