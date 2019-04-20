import moxios from 'moxios';
import {spy} from 'sinon';
import {getAlbums} from './albums-api';
import {getMockAlbums} from './albums-api.stub';

describe('Album API', () => {
    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    describe('getAlbums', () => {
        it('should make a request to the proper url', done => {
            const data = getMockAlbums(6);
            const successHandler = spy();

            moxios.stubRequest(/^http:\/\/jsonplaceholder\.typicode\.com\/albums/, {
                status: 200,
                response: data,
            });
            getAlbums().then(successHandler);

            moxios.wait(() => {
                expect(successHandler).to.have.been.calledOnce;

                done();
            });
        });
    });

});
