import React from 'react';
import {mount} from 'enzyme';
import {spy} from 'sinon';
import {getPosts, getMockPosts} from '../../../utils/posts-api.stub';
import PostList from './PostList';

describe('PostList', () => {
    it('should render no posts by default', () => {
        const wrapper = mountComponent();
        expect(wrapper.find('li')).to.have.length(0);
    });

    it('should invoke the getPosts method ', () => {
        const getReposSpy = getGetPostSpy();
        mountComponent({getPosts: getReposSpy});
        expect(getReposSpy).to.have.been.calledOnce;

    });

    it('should list the posts', done => {
        const totalRepos = 3;
        const getReposSpy = getGetPostSpy(getMockPosts(totalRepos));
        const wrapper = mountComponent({getPosts: getReposSpy});
        setTimeout(() => {
            expect(wrapper.find('li')).to.have.length(totalRepos);
            done();
        });
    });

});

function mountComponent(props = {}) {
    return mount(<PostList {...getDefaultProps()} {...props} />);
}

function getDefaultProps() {
    return {

        getPosts,
    };
}

function getGetPostSpy(resolvedValue = getMockPosts()) {
    return spy(() => Promise.resolve(resolvedValue));
}
