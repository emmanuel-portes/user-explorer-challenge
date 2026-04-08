interface User {
    id: number
    name: string
    email: string
    phone: string
    company: string
    city: string
}

interface searchCriteria {
    query?: string 
    city?: string 
    company?: string 
}

type userDTO = Omit<User, 'id'>

export type { User, userDTO, searchCriteria }
