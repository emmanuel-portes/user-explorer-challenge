interface User {
    id: number
    name: string
    email: string
    phone: string
    company: string
    city: string
}

type userDTO = Omit<User, 'id'>

export type { User, userDTO }
