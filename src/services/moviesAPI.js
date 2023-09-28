import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
//const API_KEY = '4a5d686b020f509eaf7a11c7e6302126';
const options = {
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTVkNjg2YjAyMGY1MDllYWY3YTExYzdlNjMwMjEyNiIsInN1YiI6IjY0Yzc2MzJkMzBmNzljMDBlNGYwMjU3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ViOzV2y4zHN98oW6-jI9bRMPkyehNN86ete9-XHpn2U',
    },
  };
  
export async function fetchMovies(endpoint) {
  return await axios.get(`${BASE_URL}${endpoint}`,options).then(response => {
    if (response.status !== 200) {
      throw new Error(response.statusText);
    }
    return response.data;
  });
}
