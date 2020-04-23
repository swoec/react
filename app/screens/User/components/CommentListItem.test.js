/* eslint camelcase:0 */
import React from 'react';
import {render} from 'enzyme';
import {getMockComment} from '../../../utils/comments-api.stub';
import CommentListItem from './CommentListItem';

describe('CommentListItem', () => {
    it('should get the items', () => {

        const comments = getMockComment();
        const wrapper = render(<CommentListItem repo={comments}/>);
        const timeEl = wrapper.find('a');
        expect(timeEl).to.not.equal(null);
    });
});
