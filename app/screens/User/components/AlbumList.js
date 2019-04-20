import React, {Component, PropTypes} from 'react';
import AlbumListItem from './AlbumListItem';
import {getAlbums} from '../../../utils/albums-api'



export default class AlbumList extends Component {
    constructor() {
        super()
        this.state = {albums: []}
    }

    getAlbums() {
        this.props.getAlbums().then(albums => {
            this.setState({albums});
        });
    }

    componentWillMount() {
        this.getAlbums();
    }

    render() {
        const {albums} = this.state
        return (
          <ul className="list-unstyled">
            {renderAlbums(albums)}
          </ul>
        );
    }
}

AlbumList.propTypes = {
    getAlbums: PropTypes.func,
};
AlbumList.defaultProps = {getAlbums}

function renderAlbums(albums) {
    return albums
        .map(album => <AlbumListItem key={album.id} album={album} />);
}
