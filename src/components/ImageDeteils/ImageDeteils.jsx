import PropTypes from 'prop-types';

const ImageDeteils = ({ tags, largeImageURL }) => {
  return <img src={largeImageURL} alt={tags} />;
};
export default ImageDeteils;

ImageDeteils.propTypes = {
  tags: PropTypes.string,
  largeImageURL: PropTypes.string,
};
