const BASE_URL = "http://localhost:3100/api/v1.0/users"

export const getUsers = async (querySearch) => {
    const params = new URLSearchParams()
    if (querySearch.query) params.append("query", querySearch.query)
    if (querySearch.city) params.append("city", querySearch.city) 
    if (querySearch.company) params.append("company", querySearch.company)

    const response = await fetch(`${BASE_URL}?${params.toString()}`)
    const result = await response.json()
    return result
}

export const getUsersById = async (id) => {
    const response = await fetch(`${BASE_URL}/${id}`)
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