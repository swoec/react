import React, {Component, PropTypes} from 'react';
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
    return (
      <div className="container">
        <div className="row">
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
