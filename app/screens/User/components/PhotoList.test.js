import React from 'react';
import {mount} from 'enzyme';
import {spy} from 'sinon';
import {getPhotos, getMockPhotos} from '../../../utils/photos-api.stub';
import PhotoList from './PhotoList';

describe('PhotoList', () => {
    it('should render no photo by default', () => {
        const wrapper = mountComponent();
        expect(wrapper.find('a')).to.have.length(0);
    });

    it('should invoke the getPhotos method ', () => {
        const getReposSpy = getGetPhotoSpy();
        mountComponent({getPhotos: getReposSpy});
        expect(getReposSpy).to.have.been.calledOnce;

    });

    it('should list the Photos', done => {
        const totalPhotos = 3;
        const getPhotoSpy = getGetPhotoSpy(getMockPhotos(totalPhotos));
        const wrapper = mountComponent({getPhotos: getPhotoSpy});
        setTimeout(() => {
            expect(wrapper.find('img')).to.have.length(totalPhotos);
            done();
        });
    });

});

function mountComponent(props = {}) {
    return mount(<PhotoList {...getDefaultProps()} {...props} />);
}

function getDefaultProps() {
    return {

        getPhotos,
    };
}

function getGetPhotoSpy(resolvedValue = getMockPhotos()) {
    return spy(() => Promise.resolve(resolvedValue));
}
