const BASE_URL = "http://localhost:3100/api/v1.0/users"

export const getUsers = async () => {
    const response = await fetch(BASE_URL)
    const result = await response.json()
    return result
}

export const getUsersById = async (id) => {
    const response = await fetch(`${BASE_URL}/${id}`)
    const result = await response.json()
    return result
}

export const getUsersBySearchCriteria = async (query) => {
    const response = await fetch(`${BASE_URL}/?search=${encodeURIComponent(query)}`)
    const result = await response.json()
    return result
}

export const getUsersByCity = async (city) => {
    const response = await fetch(`${BASE_URL}/?search=${encodeURIComponent(city)}`)
    const result = await response.json()
    return result
}

export const getUsersByCompany = async (company) => {
    const response = await fetch(`${BASE_URL}/?search=${encodeURIComponent(company)}`)
    const result = await response.json()
    return result
}

export const saveUser = async (data) => {
    const response = await fetch(`${BASE_URL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        mode: 'cors',
        body: JSON.stringify(data)
    })
    const result = await response.json()
    return result
}