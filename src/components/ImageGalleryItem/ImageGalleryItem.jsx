import styles from './gallery-item.module.css';

const ImageGalleryItem = ({
  id,
  src,
  largeImageURL,
  tags, 
  showImage
}) => {
  return (
      <li onClick={() => showImage({ tags, largeImageURL })} key={id} className={styles.galleryItem} >
      <img src={src} alt={tags} className={styles.image} />
    </li>
  );
};

export default ImageGalleryItem;
