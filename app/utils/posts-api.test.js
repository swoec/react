import moxios from 'moxios';
import {spy} from 'sinon';
import {getPosts} from './posts-api';
import {getMockPosts} from './posts-api.stub';

describe('Posts API', () => {
    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    describe('getPosts', () => {
        it('should make a request to the proper url', done => {
            const data = getMockPosts(6);
            const successHandler = spy();

            moxios.stubRequest(/^http:\/\/jsonplaceholder\.typicode\.com\/posts/, {
                status: 200,
                response: data,
            });
            getPosts().then(successHandler);

            moxios.wait(() => {
                expect(successHandler).to.have.been.calledOnce;

                done();
            });
        });
    });

});
