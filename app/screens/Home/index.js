import React, {Component} from 'react';

import AlbumList from '../User/components/AlbumList'


export default class Home extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.context.router.push({pathname: `/${this._input.value}`});
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

Home.contextTypes = {
  router: React.PropTypes.object.isRequired,
}
