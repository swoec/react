import moxios from 'moxios';
import {spy} from 'sinon';
import {getUser} from './user-api';
import {getMockUser} from './user-api.stub';

describe('User API', () => {

    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    describe('getUsers', () => {
        it('should make a request to the proper url', done => {
            const data = getMockUser();
            const successHandler = spy();

            moxios.stubRequest(/^http:\/\/jsonplaceholder\.typicode\.com\/user/, {
                status: 200,
                response: data,
            });
            getUser(1).then(successHandler);

            moxios.wait(() => {
                expect(successHandler).to.have.been.calledOnce;

                done();
            });
        });
    });

});
