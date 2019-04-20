import moxios from 'moxios';
import {spy} from 'sinon';
import {getPhotos} from './photos-api';
import {getMockPhotos} from './photos-api.stub';


// import _ from "lodash";
//
// const request = require('request');

describe('photo API', () => {

    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });


    describe('getPhotos', () => {
        it('should make a request to the proper url', done => {
            const data = getMockPhotos(6);
            const successHandler = spy();

            moxios.stubRequest(/^http:\/\/jsonplaceholder\.typicode\.com\/photos/, {
                status: 200,
                response: data,
            });
            getPhotos(1).then(successHandler);

            moxios.wait(() => {
                expect(successHandler).to.have.been.calledOnce;

                done();
            });
        });
    });

});
