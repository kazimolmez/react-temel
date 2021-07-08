import axios from "axios"

const handleError = error => {
    if (error.response) {
        console.log('Error status', error.response.status)
    } else if (error.request) {
        console.log('Error request', error.request)
    }
    console.log('Error message', error.message)
}

const getRequest = async(path) => {
    let base_url = 'https://jsonplaceholder.typicode.com'
    return new Promise(async(resolve, reject) => {
        await axios.get(base_url + path)
            .then(result => resolve(result.data))
            .catch(error => reject(handleError(error)))
    })
}

const getData = async user_id => {
    try {
        const user = await getRequest(`/users/${user_id}`)
        const posts = await getRequest(`/posts?userId=${user_id}`)
        let data = user
        data = {...data, posts }
        return data
    } catch (e) {
        return null
    }
}

export default { getData }