import moxios from 'moxios';
import {spy} from 'sinon';
import {getComments} from './comments-api';
import {getMockComments} from './comments-api.stub';

describe('Comment API', () => {

    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    describe('getComments', () => {
        it('should make a request to the proper url', done => {
            const data = getMockComments(6);
            const successHandler = spy();

            moxios.stubRequest(/^http:\/\/jsonplaceholder\.typicode\.com\/comments/, {
                status: 200,
                response: data,
            });
            getComments(1).then(successHandler);

            moxios.wait(() => {
                expect(successHandler).to.have.been.calledOnce;
                done();
            });
        });
    });

});
