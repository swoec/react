import React, {Component, PropTypes} from 'react';
import {getUser} from '../../../utils/user-api'


export default class User extends Component {
    constructor() {
        super()
        this.state = {user: {}}
    }

    getUser() {
        const {userid} = this.props
        getUser(userid)
            .then(({user}) => {
                this.setState({user});
            });
    }

    componentWillMount() {
        this.getUser();
    }

    render() {
        const {user} = this.state;
        console.log(user)
        return (
          <div>


            <strong>{user.name}</strong>


          </div>
        );
    }
}

User.propTypes = {
    userid: PropTypes.number.isRequired
}
