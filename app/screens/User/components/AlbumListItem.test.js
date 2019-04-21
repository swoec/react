/* eslint camelcase:0 */
import React from 'react';
import {mount, render} from 'enzyme';
import {getMockAlbum} from '../../../utils/albums-api.stub';
import AlbumListItem from './AlbumListItem';
import {spy} from 'sinon';


describe('AlbumListItem', () => {
    it('should get the items', () => {

        const album = getMockAlbum();
        const wrapper = render(<AlbumListItem album={album} />);
        const timeEl = wrapper.find('li');
        expect(timeEl).to.not.equal(null);
    });

    it('should click the button', done => {
        const album = getMockAlbum();
        const wrapper = mount(<AlbumListItem album={album} />);
        const instance = wrapper.instance();
        instance.togglePhotolist = spy(instance.togglePhotolist);
        instance.onClick = spy(instance.onClick);
        wrapper.update();
        it('should call togglePhotolist on render', () => {
            wrapper.find('button').simulate('click');
            expect(instance.onClick).to.have.been.calledOnce;
            expect(instance.togglePhotolist).to.have.been.calledOnce;
        });
        done();

    });
});
