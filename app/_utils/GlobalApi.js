import axios from 'axios';
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

let axioxClient = axios.create({
  baseURL: 'http://localhost:1337/api',
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

let getCatagories = () => axioxClient.get('/sliders?populate=*');

let getDoctors = () => axioxClient.get('/doctors?populate=*');

export default {
  getCatagories,
  getDoctors,
};
