import client from "./client"


const login = async (data) => {
    console.log(data);
    fetch(`${client.BASE_URL}/token/`)
}

const allExports = {login}

export default allExports;