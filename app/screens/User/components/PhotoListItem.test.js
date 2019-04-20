/* eslint camelcase:0 */
import React from 'react';
import {render} from 'enzyme';
import {getMockPhoto} from '../../../utils/photos-api.stub';
import PhotoListItem from './PhotoListItem';

describe('PhotoListItem', () => {
    it('should get the items', () => {

        const photos = getMockPhoto();
        const wrapper = render(<PhotoListItem repo={photos} />);
        const timeEl = wrapper.find('li');
        expect(timeEl).to.not.equal(null);
    });
});
