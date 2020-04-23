import React, {Component, PropTypes} from 'react';
import CommentList from './CommentList'


export default class PostListItem extends Component {
    constructor() {
        super()
        this.state = {display: false}
    }

    toggleCommentlist = () => {
        if (this.state.display) {
            this.setState({display: false});
        } else {
            this.setState({display: true});
        }
    }

    render() {
        const {post} = this.props
        return (
            <li>
                <div>
                    <div className="post-bottom-div">
                        <ul>
                            <li>
                                <h3>{post.title}</h3>
                            </li>
                        </ul>

                        <span>{post.body}</span>
                        <button onClick={this.toggleCommentlist}>comments</button>
                    </div>

                    {this.state.display && <CommentList postId={post.id}/>}
                </div>
            </li>
        );
    }
}

PostListItem.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        userId: PropTypes.number,
        body: PropTypes.string,
        onClick: PropTypes.func
    }),
};

PostListItem.defaultProps = {
    postsItem: {},
};
