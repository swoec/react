import React, { PropTypes } from "react";

export default PhotoListItem;

function PhotoListItem({ photos }) {
  return (
    <a href={photos.url}>
      <img
        src={photos.thumbnailUrl}
        width="42"
        height="46"
        title={photos.title}
        alt=""
      />
    </a>
  );
}

PhotoListItem.propTypes = {
  photos: PropTypes.shape({
    id: PropTypes.number,
    albumId: PropTypes.number,
    title: PropTypes.string,
    url: PropTypes.string,
    thumbnailUrl: PropTypes.string,
  }),
};

PhotoListItem.defaultProps = {
  photos: {},
};
