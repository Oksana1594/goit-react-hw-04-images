import styles from './image-gallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

const ImageGallery = ({ images, showImage }) => {
  return (
    <ul className={styles.gallery}>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          id={id}
          tags={tags}
          src={webformatURL}
          largeImageURL={largeImageURL}
          showImage={showImage}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.defaultProps = {
  images: [],
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      webformatURL: PropTypes.string,
      largeImageURL: PropTypes.string,
      tags: PropTypes.string,
    })
  ).isRequired,
  showImage: PropTypes.func.isRequired,
};
