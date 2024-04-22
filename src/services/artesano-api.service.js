import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:3000',
});

export class ArtesanoApiService {
    async getAll() {
        return await http.get('artesano');
    }


    async create(body) {
        return await http.post('artesano', body);
    }


    async loginArtesano(email, password) {
        return http.get(`artesano?email=${email}&password=${password}`);
    }

}
