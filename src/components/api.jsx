import axios from 'axios';

const API_KEY = 'a3edefb60f7eeaec507fd07582e0d71e';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const END_POINTS = {
  trending: '/trending/movie/week',
  querySearch: '/search/movie',
  movieDetails: '/movie',
  movieCredits: '/credits',
  movieReviews: '/reviews',
};

export const getMovies = async () => {
  const res = await axios.get(
    `${END_POINTS.trending}?api_key=${API_KEY}&language=en-US&include_adult=false`
  );
  return res.data.results;
};

export const fetchByQuery = async (query) => {
  const res = await axios.get(
    `${END_POINTS.querySearch}?api_key=${API_KEY}&query=${query}&language=en-US&include_adult=false`
  );

  return res.data.results;
};

export const fetchMoviesDetails = async id => {
  const res = await axios.get(
    `${END_POINTS.movieDetails}/${id}?api_key=${API_KEY}&language=en-US`
  );

  return res.data;
};

export const fetchMoviesCredits = async id => {
  const res = await axios.get(
    `/movie/${id}${END_POINTS.movieCredits}?api_key=${API_KEY}&language=en-US`
  );

  return res.data.cast;
};

export const fetchMoviesReviews = async (id) => {
  const res = await axios.get(
    `/movie/${id}${END_POINTS.movieReviews}?api_key=${API_KEY}&language=en-US`
  );

  return res.data.results;
};
