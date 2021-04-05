import axios from "axios";
import { URL } from "../utils/constants";

export const createPaymentOrder = (tournamentId: number, token: string) => {
    return axios.post(URL.PAYMENT_CREATE_ORDER,{
        tournamentId,
    }, {
        headers: {
            'Authorization': `${token}`
        }
    })
}