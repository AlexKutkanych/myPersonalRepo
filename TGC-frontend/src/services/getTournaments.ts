import axios from 'axios';
import { URL } from '../utils/constants';

export const getTournaments = (url: string, token: string | null) => {
    return axios.get(url, {
        headers: {
            'Authorization': `${token}`
        }
    })
}