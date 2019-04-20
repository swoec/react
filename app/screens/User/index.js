import React, {Component, PropTypes} from 'react';
import Profile from './components/Profile'
import AlbumList from './components/AlbumList'


export default class User extends Component {
  constructor() {
    super()
    this.state = {filter: ''}
  }

  handleFilterUpdate = (filter) => {
    this.setState({filter})
  }

  render() {
    const {username} = this.props.params
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <Profile username={username} />
          </div>
          <div className="col-sm-9">
            <AlbumList />
          </div>
        </div>
      </div>
    );
  }
}

User.propTypes = {
  params: PropTypes.shape({
    username: PropTypes.string,
  }),
}
