import React, {PropTypes} from 'react';


export default UserListItem;


function UserListItem({user}) {
    return (<li className="border-bottom">
      <strong> {user.name}</strong>

    </li>);
}

UserListItem.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number,
        name:PropTypes.string,
        username: PropTypes.string,
        email: PropTypes.string,
        address: PropTypes.string,
        phone: PropTypes.string,
        website: PropTypes.string,
        company: PropTypes.string,
    }),
};

UserListItem.defaultProps = {
    user: {},
};