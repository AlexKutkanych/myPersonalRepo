import axios from 'axios';
import { URL } from '../utils/constants';

export const setPaypalProvide = (token: string) => {
    return axios.get(URL.SET_UP_PROVIDER_PAYPAL, {
        headers: {
            'Authorization': `${token}`
        }
    })
}