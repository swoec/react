import React, {PropTypes} from 'react';


export default CommentListItem;


function CommentListItem({comments}) {
    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <ul>
                <li><span><strong>{comments.name}</strong></span> : <span>{comments.body}</span></li>
            </ul>
        </div>
    );
}

CommentListItem.propTypes = {
    comments: PropTypes.shape({
        id: PropTypes.number,
        postId: PropTypes.number,
        name: PropTypes.string,
        email: PropTypes.string,
        body: PropTypes.string,
    }),
};

CommentListItem.defaultProps = {
    comments: {},
};
