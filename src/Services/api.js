import axios from 'axios';

export const fetchImagesApi = async (search, page = 1) => {
  const { data } = await axios.get(
    `https://pixabay.com/api/?q=${search}&page=${page}&key=18768531-61c439673ce499ea890cb628a&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data;
};
