import { useState, useEffect, useCallback } from 'react';
import { Circles } from 'react-loader-spinner';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import ImageDeteils from './ImageDeteils/ImageDeteils';

import { fetchImagesApi } from '../Services/api';

const App = () => {
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [error, setError] = useState('');
  const [currentImage, setCurrentImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!search) {
      return;
    }

    const fetchImages = async () => {
      try {
        setIsLoading(true);
        const data = await fetchImagesApi(search, page);
        setImages(prevImages => [...prevImages, ...data.hits]);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchImages();
  }, [search, page]);

  const searchImages = useCallback(({ search }) => {
    setSearch(search);
    setImages([]);
    setPage(1);
  }, []);

  const showImage = useCallback((tags, largeImageURL) => {
    setCurrentImage(tags, largeImageURL);
    setShowModal(true);
  }, []);

  const loadMore = useCallback(() => {
    setPage(prevPage => prevPage + 1);
  }, []);

  const closeModal = useCallback(() => {
    setShowModal(false);
    setCurrentImage(null);
  }, []);

  return (
    <>
      <Searchbar onSubmit={searchImages} />

      {Boolean(images.length) && (
        <ImageGallery images={images} showImage={showImage} />
      )}
      {error && <p>{error}</p>}

      {Boolean(images.length) && (
        <Button text="Load more" clickHandler={loadMore} />
      )}

      {isLoading && (
        <Circles
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      )}
      {showModal && (
        <Modal close={closeModal}>
          <ImageDeteils {...currentImage} />
        </Modal>
      )}
    </>
  );
};

export default App;
