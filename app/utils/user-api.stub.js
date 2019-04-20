/* eslint camelcase:0 */
import _ from 'lodash';
import {random as randomStarWarsName} from 'starwars-names';

export {getUsers, getMockUsers, getMockUser};

function getUsers() {
    return Promise.resolve({
        data: getMockUsers(),
    });
}

function getMockUsers(number = _.random(1, 40)) {
    return _.times(number, () => getMockUser());
}

function getMockUser(overrides = {}) {
    const name = overrides.name || _.kebabCase(randomStarWarsName());

    return {
        id: _.uniqueId(),
        name:name,
        username:name,
        email:"alex@gmail.com",
        address:'{\n' +
            '"street": "Kulas Light",\n' +
            '"suite": "Apt. 556",\n' +
            '"city": "Gwenborough",\n' +
            '"zipcode": "92998-3874",\n' +
            '"geo": {\n' +
            '"lat": "-37.3159",\n' +
            '"lng": "81.1496"\n' +
            '}\n' +
            '}',

        phone:'02102510440',
        website: 'hildegard.org',
        company: ' {\n' +
            '"name": "Romaguera-Crona",\n' +
            '"catchPhrase": "Multi-layered client-server neural-net",\n' +
            '"bs": "harness real-time e-markets"\n' +
            '}',


    };
}
