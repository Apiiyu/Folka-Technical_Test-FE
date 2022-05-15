import axios from '@/config/axios'
import { base_url } from '@/config/base_url'
import ApiRoute from '@/services/api.route'

export async function getDataProduct(page, limit){
    return axios.get(base_url+ApiRoute.product+`?page=${page}&limit=${limit}&order=product_name,ASC`)
        .then((response) => {
            const data = response.data

            return data
        })
        .catch((error) => {
            return error
        })
}

export async function getDataProductByKeyword(keyword, page, limit){
    return axios.get(base_url+ApiRoute.product+`?keyword=${keyword}&page=${page}&limit=${limit}&order=product_name,ASC`)
        .then((response) => {
            const data = response.data

            return data
        })
        .catch((error) => {
            return error
        })
}

export async function getDataProductByKeywordAndPrice(keyword, minimumPrice, maximumPrice, page, limit){
    return axios.get(base_url+ApiRoute.product+`?keyword=${keyword}&price=${minimumPrice},${maximumPrice}&page=${page}&limit=${limit}&order=product_name,ASC`)
        .then((response) => {
            const data = response.data

            return data
        })
        .catch((error) => {
            return error
        })
}

export async function getDataProductByPrice(minimumPrice, maximumPrice, page, limit){
    return axios.get(base_url+ApiRoute.product+`?keyword=&price=${minimumPrice},${maximumPrice}&page=${page}&limit=${limit}&order=product_name,ASC`)
        .then((response) => {
            const data = response.data

            return data
        })
        .catch((error) => {
            return error
        })
}