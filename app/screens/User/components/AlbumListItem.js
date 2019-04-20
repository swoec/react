import React, {Component, PropTypes} from 'react';

import User from './User';

import PhotoList from './PhotoList'
// import AlbumList from "./AlbumList";



export default class AlbumListItem extends Component {

    constructor() {

        super()

        this.state = {display:false}

    }



    togglePhotolist=()=>{

        if(this.state.diplay){

            this.setState({display: false});

        }else{

            this.setState({display: true});

        }

    }



    render() {

        const {album} = this.props



        return (

          <li className="border-bottom">

            <div className="pull-left">

              <button onClick={this.togglePhotolist}>{album.title}</button>

              {this.state.display && <PhotoList albumId={album.id} />}

              {/*<a href="">{album.title}</a >*/}

              {/*<PhotoList albumId={album.id}*/}

              <User userid={album.userId} />

            </div>

          </li>

        );

    }



}

AlbumListItem.propTypes = {
    album: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        userId: PropTypes.number,
        onClick: PropTypes.func
        // handleClick :PropTypes.func,
    }),
};

AlbumListItem.defaultProps = {
    albumsItem: {},

    // handleClick :PropTypes.func,
};