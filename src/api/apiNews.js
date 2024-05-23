import axios from "axios"

// const BASE_URL=import.meta.env.VITE_NEWS_BASE_API_URL
// const API_KEY=import.meta.env.VITE_NEWS_API_KEY

export const getNews = async () => {
    try {
        const respons = await axios.get(`https://api.currentsapi.services/v1/latest-news`, {
            params: {
                apiKey: 'B-yvMWSMQjhKHCAFGMH73CXoQO2R7qGdOsoopZ85yTFJaxUs'
            }
        })
        return respons.data
    } catch (error) {
        console.log(error)
    }
}