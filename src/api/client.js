import axios from "axios";

export const options = {
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
}

const client = axios.create({
    baseURL: "http://127.0.0.1:8000/api/v1",
    timeout: 1000,

});

export default client;