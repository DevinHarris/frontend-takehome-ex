import axios from 'axios';

export default axios.create({
    baseURL: 'https://frontend-take-home.fetchrewards.com/',
    responseType: 'json'
});