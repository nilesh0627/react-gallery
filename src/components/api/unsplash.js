import axios from 'axios'
import {access_key} from '../../unsplashconfig'
export default axios.create(
    {
        baseURL:'https://api.unsplash.com/',
        headers:{
            Authorization:`Client-ID ${access_key}`
        }
    }    
)