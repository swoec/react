/* eslint camelcase:0 */
import React from 'react';
import {mount, render} from 'enzyme';
import {getMockPost} from '../../../utils/posts-api.stub';
import PostListItem from './PostListItem';
import {spy} from 'sinon';


describe('PostListItem', () => {
    it('should get the items', () => {

        const post = getMockPost();
        const wrapper = render(<PostListItem post={post}/>);
        const timeEl = wrapper.find('li');
        expect(timeEl).to.not.equal(null);
    });

    it('should click the button', done => {
        const post = getMockPost();
        const wrapper = mount(<PostListItem post={post}/>);
        const instance = wrapper.instance();
        instance.toggleCommentlist = spy(instance.toggleCommentlist);
        instance.onClick = spy(instance.onClick);
        wrapper.update();
        it('should call toggleCommentlist on render', () => {
            wrapper.find('button').simulate('click');
            expect(instance.onClick).to.have.been.calledOnce;
            expect(instance.toggleCommentlist).to.have.been.calledOnce;
        });
        done();

    });
});
