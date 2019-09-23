import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://garden-planner-baff9.firebaseio.com/'
});

export default instance;