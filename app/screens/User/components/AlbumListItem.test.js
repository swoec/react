/* eslint camelcase:0 */
import React from 'react';
import {render} from 'enzyme';
import {getMockAlbum} from '../../../utils/albums-api.stub';
import AlbumListItem from './AlbumListItem';

describe('AlbumListItem', () => {
    it('should get the items', () => {

        const album = getMockAlbum();
        const wrapper = render(<AlbumListItem album={album} />);
        const timeEl = wrapper.find('li');
        expect(timeEl).to.not.equal(null);
    });

    it('should display the items', () => {

        const album = getMockAlbum();
        const wrapper = render(<AlbumListItem display={false} album={album} />);
        const timeEl = wrapper.find('li');
        expect(timeEl).to.not.equal(null);
    });
});
