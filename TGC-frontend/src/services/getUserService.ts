import axios from 'axios';
import { URL } from '../utils/constants';

export const getUserService = (token: string) => {
    return axios.get(URL.GET_USER_DATA, {
        headers: {
            'Authorization': `${token}`
        }
    })
}