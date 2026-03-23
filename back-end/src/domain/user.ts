interface User {
    id: number
    name: string
    email: string
    phone: string
    company: string
    city: string
}

interface searchCriteria {
    query?: string | undefined
    city?: string | undefined
    company: string | undefined
}

type userDTO = Omit<User, 'id'>

export type { User, userDTO, searchCriteria }
