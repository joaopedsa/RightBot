import axios from 'axios'

class ApiWit {
    static api
    constructor() {
        ApiWit.api = axios.create({
            baseURL: process.env.witURL
        })

        ApiWit.api.interceptors.request.use(function(config) {
            config.headers.Authorization = `Bearer ${process.env.AccessTokenWit}`;
            return config;
        });
    }

}

export default ApiWit