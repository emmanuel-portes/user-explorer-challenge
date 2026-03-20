
import { userDTO, User } from "../domain/user";
import users from "../data/data";

export default class UserExplorerService {
    constructor(){}

    getUsers() {
        if (!users.length) {
            return { success: false, data: users, message: "Users not available" }
        }
        return { success: true, data: users }
    }

    getUsersById(id: string) {
        const user = users.find(user => user.id === parseInt(id))
        if (!user) {
            return {success: false, message: `User not found with provided id: ${id}`}
        }
        return { success: true, data: user }
    }

    getUserBySearch(search: string) {
        const user = users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()) 
        || user.email.toLowerCase().includes(search.toLowerCase()) 
        || user.phone.toLowerCase().includes(search.toLowerCase())
        || user.company.toLowerCase().includes(search.toLowerCase())
        || user.city.toLowerCase().includes(search.toLowerCase()))

        if (!user.length) {
            return { success: false, message: "Users not found" }
        }
        return {sucess: true, data: user}
    }

    getUserByCity(city: string) {
        const user = users.filter(user => user.city.toLowerCase() === city.toLowerCase())
        if (!user.length) {
            return { success: false, message: `Users not found with given city: ${city}`}
        }
        return { success: true, data: user }
    }

    getUserByCompany(company: string) {
        const user = users.filter(user => user.company.toLowerCase() === company.toLowerCase())
        if (!user.length) {
            return { success: false, message: `Users not found with given company: ${company}`}
        }
        return { success: true, data: user }
    }

    saveUser(user: userDTO) {
        const newUser: User = {
            id: users.length + 1,
            name: user.name,
            email: user.email,
            phone: user.phone,
            company: user.company,
            city: user.city
        }

        const userExists = users.findIndex(user => user.email === newUser.email || user.phone === newUser.phone)
        
        if (userExists === -1) {
            users.push(newUser)
            return {success: true, data: { id: newUser.id }, message: `User ${newUser.email} successfully added` }
        }
        return {success: false, data: user, message: 'User provided already exists'}

    }
}

