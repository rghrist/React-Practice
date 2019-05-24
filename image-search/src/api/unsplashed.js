import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers:{
        Authorization: 'Client-ID dca5d7d8a2bba42be65f3160a37968c9f605a364ad81dbc5c6fec5508e8be759'
    }
});