import client from "./client"

export const post_options = {
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
}

const login = async (data) => {
    return client.post('/token/', data, post_options)
    .then((response) => response)
    .catch((error) => {
        return { status: false }
    })
    .then((response) => { 
       return response
    })
}

const allExports = { login };

export default allExports;