import axios from "axios";

const BaseURL = "https://fakestoreapi.com"
const instances = axios.create({
    baseURL: BaseURL,
    headers:{
        "content-type": "application/json", // the data type of the request to the server
        "Accept": "application/json" // the data type of the response from the server
    },
    // timeout: 5000, // Optional: Set a timeout for requests
    // withCredentials: true, // Optional: Include credentials in requests (e.g., cookies)
    // maxRedirects: 5, // Optional: Set the maximum number of redirects
    // responseType: 'json', // Optional: Set the response type
    // params: {}, // Optional: Set default query parameters
    // auth: { // Optional: Set basic authentication credentials
    //     username: 'your-username',
    //     password: 'your-password'
    // },
    // proxy: { // Optional: Set a proxy for requests
    //     host: '  your-proxy-host',
    //     port: 8080, // your-proxy-port
    //     protocol: 'http' // or 'https'
    // }
})

export default instances;