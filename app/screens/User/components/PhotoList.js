import React, {Component, PropTypes} from 'react';
import PhotoListItem from './PhotoListItem';
import {getPhotos} from '../../../utils/photos-api'

export default class PhotoList extends Component {
    constructor() {
        super()
        this.state = {photos: []}
    }

    getPhotos() {
        const {albumId} = this.props;
        this.props.getPhotos(albumId).then(photos => {
            this.setState({photos});
        });
    }

    componentWillMount() {
        this.getPhotos();
    }

    render() {
        const {photos} = this.state;
        return (
          <ul className="list-unstyled">
            <li className="border-bottom">
              {renderPhotos(photos)}
            </li>
          </ul>
        );
    }
}

PhotoList.propTypes = {

    albumId: PropTypes.number.isRequired,
    getPhotos: PropTypes.func,
};
PhotoList.defaultProps = {getPhotos};

function renderPhotos(photos) {
    return photos.map(photo => <PhotoListItem key={photo.id} photos={photo} />);
}
