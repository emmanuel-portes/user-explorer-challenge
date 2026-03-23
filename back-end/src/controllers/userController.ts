import UserExplorerService from '../services/userService'
import { userDTO, searchCriteria } from '../domain/user'

export default class UserExplorerController {

    private _userExplorerService: UserExplorerService

    constructor(userExplorerService: UserExplorerService) {
        this._userExplorerService = userExplorerService
    }

    getUsers() {
        return this._userExplorerService.getUsers()
    }

    getUsersById(id: string) {
        return this._userExplorerService.getUsersById(id)
    }

    getUserBySearch(queryFilter: searchCriteria) {
        const query = queryFilter.query
        const city = queryFilter.city
        const company = queryFilter.company

        const filters = {
            query: query?.toString().trim() || undefined,
            city: city?.toString().trim() || undefined,
            company: company?.toString().trim() || undefined
        }
        
        return this._userExplorerService.getUserBySearch(filters)
    }

    saveUser(user: userDTO) {
        return this._userExplorerService.saveUser(user)
    }
}