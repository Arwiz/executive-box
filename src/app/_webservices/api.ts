import axios from "axios"
import {environment} from '../environments/environment'
export default axios.create({
    baseURL: environment.serverURI,
    headers: {
        'Content-Type': 'application/json',
        'Referrer-Policy': 'origin'
    }
});
