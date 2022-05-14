import axios from 'axios'
import { base_url } from '@/config/base_url'
import ApiRoute from '@/services/api.route'

export async function registerAccount(data){
    return axios.post(base_url+ApiRoute.register, data)
        .then((response) => {
            const data = response.data

            return data
        })
        .catch((error) => {
            return error
        })
}