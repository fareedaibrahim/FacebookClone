import client from "./client"


const login = async (data) => {
    await fetch(`${client.BASE_URL}/token/`, { method: "POST" }).then((data) => {
        console.log(data);
    })
}

const allExports = { login };

export default allExports;