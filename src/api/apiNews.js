import axios from "axios"

// const BASE_URL=import.meta.env.VITE_NEWS_BASE_API_URL
// const API_KEY=import.meta.env.VITE_NEWS_API_KEY

export const getNews = async ({page_number = 1, page_size = 10, category, keywords}) => {
    try {
        const respons = await axios.get(`https://api.currentsapi.services/v1/search`, {
            params: {
                apiKey: 'B-yvMWSMQjhKHCAFGMH73CXoQO2R7qGdOsoopZ85yTFJaxUs',
                page_number,
                page_size,
                category,
                keywords,
            }
        })
        return respons.data
    } catch (error) {
        console.log(error)
    }
}
export const getCategories = async () => {
    try {
        const respons = await axios.get(`https://api.currentsapi.services/v1/available/categories`, {
            params: {
                apiKey: 'B-yvMWSMQjhKHCAFGMH73CXoQO2R7qGdOsoopZ85yTFJaxUs',  
            }
        })
        return respons.data
    } catch (error) {
        console.log(error)
    }
}