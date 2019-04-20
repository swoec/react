import moxios from 'moxios';
import {spy} from 'sinon';
import {getAlbums} from './albums-api';
import {getMockAlbums} from './albums-api.stub';
//
// const request = require('request');

describe('Album API', () => {

    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    // describe('GET /api/v1/albums', () => {
    //     it('should return all albums', (done) => {
    //         request.get('http://jsonplaceholder.typicode.com/albums', (err, res) => {
    //             if(err){
    //                 throw err
    //             }
    //             // there should be a 200 status code
    //             // res.statusCode.should.eql(200);
    //             // // the response should be JSON
    //             // res.headers['content-type'].should.contain('application/json');
    //             expect(res.statusCode).to.equal(200)
    //
    //
    //
    //             done();
    //         });
    //     });
    // });

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
