import client, { options } from "./client"

const login = async (data) => {
    return client.post('/token/', data, options)
    .then((response) => response)
    .catch((error) => {
        return { status: false }
    })
    .then((response) => { 
       return response
    })
}

const signUp = async (data) => {
    const newoptions = {...options, headers: {'Content-Type': "form/data"}}
    
    return client.post("/register/", data, options)
    .then((response) => response)
    .catch((error) => {
        console.log("error")
        console.log(error)
        console.log("error")
    })
    .then((response) =>{
         console.log("response")
         console.log(response)
         console.log("response")
        }
    );
}

const allExports = { login, signUp };

export default allExports;