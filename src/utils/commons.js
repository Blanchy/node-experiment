const addAuthorization = (options) => {

}

const fetch = (url, options = {}) => {
    return window.fetch(url, options).then(resp => {
        return resp.json()
    }).catch( err => {
        Promise.reject(err)
    })
}

export { fetch }