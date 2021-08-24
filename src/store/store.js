const prefix = "facebook_"

const setItem = (key, value) => {
    localStorage.setItem(prefix + key, JSON.stringify(value));
}

const getItem = (key) => {
    const item = localStorage.getItem(prefix + key)
    return JSON.parse(item);
}

const allExports = {
    getItem, 
    setItem
}

export default allExports;