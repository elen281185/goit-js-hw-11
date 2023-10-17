import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/';
const API_KEY = '40111738-d7e552867bbc5baf17cb48e18';
export async function getPhoto(query, page, per_page) {
    try {
      const { data } = await axios('api/', {
        params: {
          key: API_KEY,
          q: query,
          page,
          image_type: 'photo',
          orientation: 'horizontal',
          safesearch: true,
          per_page,
        },
      });
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }