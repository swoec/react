import React, {Component, PropTypes} from 'react';
import UserListItem from './UserListItem';
import {getUser} from '../../../utils/user-api'



export default class UserList extends Component {
    constructor(props) {
        super(props)
        this.state = {users: []}
    }

    getUser() {
        const {userId} = this.props;
        this.props.getUser(userId).then(users => {
            this.setState({users});
        });
    }

    componentWillMount() {
        this.getUser();
    }

    render() {
        const {users} = this.state;

        return (
          <ul className="list-unstyled">
            {renderUsers(users)}
          </ul>
        );
    }
}

UserList.propTypes = {
    userId: PropTypes.number.isRequired,
    getUser: PropTypes.func,
};
UserList.defaultProps = {getUser}

function renderUsers(users) {
    // console.log(albums)
    return users.map(user => <UserListItem key={user.id} user={user} />);
}
