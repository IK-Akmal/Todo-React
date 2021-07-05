export function getUserFromLocalstorage() {
    return localStorage.getItem('name')
}

export function saveUserToLocalstorage(username) {
    return localStorage.setItem('name', username)
}

export function removeUserFromLocalstorage() {
    return localStorage.removeItem('name')
}