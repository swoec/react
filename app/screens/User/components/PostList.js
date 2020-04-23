import React, {Component, PropTypes} from 'react';
import PostListItem from './PostListItem';
import {getPosts} from '../../../utils/posts-api'


export default class PostList extends Component {
    constructor() {
        super()
        this.state = {posts: []}
    }

    getPosts() {
        this.props.getPosts().then(posts => {
            this.setState({posts});
        });
    }

    componentWillMount() {
        this.getPosts();
    }

    render() {
        const {posts} = this.state
        return (
            <ul className="list-unstyled">
                {renderPosts(posts)}
            </ul>
        );
    }
}

PostList.propTypes = {
    getPosts: PropTypes.func,
};
PostList.defaultProps = {getPosts}

function renderPosts(posts) {
    return posts.map(post => <PostListItem key={post.id} post={post}/>);
}
