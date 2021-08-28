import axios from "axios";

export default class APIService {
    static API_BASE_URL = "https://rickandmortyapi.com/api/character/";
    // let url = `https://rickandmortyapi.com/api/character/?gender=${filter.gender ? filter.gender : ''}&species=${filter.species ? filter.species : ''}&status=${filter.aliveness ? filter.aliveness : ''}`;

    static getCharactersByFilter(gender, species, aliveness) {
        let restOfUrl = `?gender=${gender ? gender : ''}&species=${species ? species : ''}&status=${aliveness ? aliveness : ''}`
        return axios.get(this.API_BASE_URL + restOfUrl)
            .then((response) => {
                if (response.status >= 200 && response.status <= 299) {
                    return response.data.results;

                } else {
                    throw Error(response.statusText);
                }
            }).catch(() => {
                return [];
            })
    }

    static getCharacterByName(name) {
        return axios
            .get(this.API_BASE_URL + '?name=' + name)
            .then((response) => response.data.results[0]);
    }
}
