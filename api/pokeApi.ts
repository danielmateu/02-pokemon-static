import axios from "axios";

const pokeApi = axios.create({
    baseURL: "http://pokeapi.co/api/v2",
})

// pokeApi.get('/pokemon?limit=151')

export default pokeApi;