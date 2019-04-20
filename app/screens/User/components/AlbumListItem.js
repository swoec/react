import React, {PropTypes} from 'react';

// import {getUser} from "../../../utils/user-api";
// import UserList from './UserList';
import User from './User';
// import PhotoList from './PhotoList'

export default AlbumListItem;

// const request = require('request');

function AlbumListItem({album}) {

        // const user = getUser(album.userId);

        // let list = {};
        // list = user;
        //
        // console.log(list)

        // handleClick(){
        //     return (
        //         <li className="border-bottom">
        //             <div className="pull-left">
        //
        //                 <PhotoList albumId={album.id}/>
        //
        //             </div>
        //         </li>
        //     );
        // }

        return (
          <li className="border-bottom">
            <div className="pull-left">
              <a href="">{album.title}</a>
              {/*<PhotoList albumId={album.id}*/}
              <User userid={album.userId} />
            </div>
          </li>
        );



}

AlbumListItem.propTypes = {
    album: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        userId: PropTypes.number,
        // handleClick :PropTypes.func,
    }),
};

AlbumListItem.defaultProps = {
    album: {},
    // handleClick :PropTypes.func,
};
