
import { userDTO, User, searchCriteria } from "../domain/user";
import users from "../data/data";

export default class UserExplorerService {
    constructor() {

    }

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

    getUserBySearch(searchQuery: searchCriteria) {
        const query = searchQuery.query?.toLowerCase()
        const cityFilter = searchQuery.city?.toLowerCase()
        const companyFilter = searchQuery.company?.toLowerCase()

        const user = users.filter((user) => {
            const name = user.name.toLowerCase()
            const email = user.email.toLowerCase()
            const city = user.city.toLowerCase()
            const company = user.company.toLowerCase()

            if (query && !(name.includes(query) || email.includes(query))) {
                return false
            }

            if (cityFilter && !city.includes(cityFilter)) {
                return false
            }

            if (companyFilter && !company.includes(companyFilter)) {
                return false
            }
            return true
        }) 
        
        if (!user.length) {
            return { success: false, message: "Users not found" }
        }
        return {success: true, data: user}
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

