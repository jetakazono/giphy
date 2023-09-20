import axios from "axios"

const APIstr = `&api_key=${import.meta.env.VITE_API_KEY}`
const api = axios.create({
    baseURL: "https://api.giphy.com/v1/gifs",
})

export const getGifs = (query, page = 0, limit = 24) => {
    const req = query ? "/search" : "/trending"
    const offset = limit * page

    return api
        .get(
            `${req}?q=${query}&offset=${offset}&limit=${limit}&rating=g&lang=en&bundle=messaging_non_clips${APIstr}`
        )
        .then((res) => res.data)
}
