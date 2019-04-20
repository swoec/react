import React from 'react';
import {mount} from 'enzyme';
import {spy} from 'sinon';
import {getAlbums, getMockAlbums} from '../../../utils/albums-api.stub';
import AlbumList from './AlbumList';

describe('AlbumList', () => {
    it('should render no albums by default', () => {
        const wrapper = mountComponent();
        expect(wrapper.find('li')).to.have.length(0);
    });

    it('should invoke the getAlbums method ', () => {
        const getReposSpy = getGetAlbumSpy();
        mountComponent({getAlbums: getReposSpy});
        expect(getReposSpy).to.have.been.calledOnce;

    });

    it('should list the albums', done => {
        const totalRepos = 3;
        const getReposSpy = getGetAlbumSpy(getMockAlbums(totalRepos));
        const wrapper = mountComponent({getAlbums: getReposSpy});
        setTimeout(() => {
            expect(wrapper.find('li')).to.have.length(totalRepos);
            done();
        });
    });

});

function mountComponent(props = {}) {
    return mount(<AlbumList {...getDefaultProps()} {...props} />);
}

function getDefaultProps() {
    return {

        getAlbums,
    };
}

function getGetAlbumSpy(resolvedValue = getMockAlbums()) {
    return spy(() => Promise.resolve(resolvedValue));
}
