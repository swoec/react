import React, {PropTypes} from 'react';


export default PhotoListItem;


function PhotoListItem({photos}) {
    // console.log(photos.title)
    return (
      <li className="border-bottom">
        <div className="pull-right">
          <a href={photos.url}>
            <img src={photos.thumbnailUrl} width="82" height="86" title={photos.title} alt="" /></a>

        </div>
      </li>
    );
}

PhotoListItem.propTypes = {
    photos: PropTypes.shape({
        id: PropTypes.number,
        albumId:PropTypes.number,
        title: PropTypes.string,
        url: PropTypes.string,
        thumbnailUrl: PropTypes.string,
    }),
};

PhotoListItem.defaultProps = {
    photos: {},
};