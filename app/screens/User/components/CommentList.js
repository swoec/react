import React, {Component, PropTypes} from 'react';
import CommentListItem from './CommentListItem';
import {getComments} from '../../../utils/comments-api'

export default class CommentList extends Component {
    constructor() {
        super()
        this.state = {comments: []}
    }

    getComments() {
        const {postId} = this.props;
        this.props.getComments(postId).then(comments => {
            this.setState({comments});
        });
    }

    componentWillMount() {
        this.getComments();
    }

    render() {
        const {comments} = this.state;
        return (
            <ul className="list-unstyled">
                <li className="border-bottom">
                    {renderComments(comments)}
                </li>
            </ul>
        );
    }
}

CommentList.propTypes = {

    postId: PropTypes.number.isRequired,
    getComments: PropTypes.func,
};
CommentList.defaultProps = {getComments};

function renderComments(comments) {
    console.log(comments);
    return comments.map(comment => <CommentListItem key={comment.id} comments={comment}/>);
}
