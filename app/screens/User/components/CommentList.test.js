import React from 'react';
import {mount} from 'enzyme';
import {spy} from 'sinon';
import {getComments, getMockComments} from '../../../utils/comments-api.stub';
import CommentList from './CommentList';

describe('CommentList', () => {
    it('should render no comment by default', () => {
        const wrapper = mountComponent();
        expect(wrapper.find('a')).to.have.length(0);
    });

    it('should invoke the getComments method ', () => {
        const getReposSpy = getGetCommentSpy();
        mountComponent({getComments: getReposSpy});
        expect(getReposSpy).to.have.been.calledOnce;

    });

    it('should list the Comments', done => {
        const totalComments = 3;
        const getCommentSpy = getGetCommentSpy(getMockComments(totalComments));
        const wrapper = mountComponent({getComments: getCommentSpy});
        setTimeout(() => {
            expect(wrapper.find('a')).to.have.length(totalComments);
            done();
        });
    });

});

function mountComponent(props = {}) {
    return mount(<CommentList {...getDefaultProps()} {...props} />);
}

function getDefaultProps() {
    return {

        getComments,
    };
}

function getGetCommentSpy(resolvedValue = getMockComments()) {
    return spy(() => Promise.resolve(resolvedValue));
}
