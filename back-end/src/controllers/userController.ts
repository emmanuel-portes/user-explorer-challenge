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
        const filters = {
            query: queryFilter.query?.toString().trim(),
            city: queryFilter.city?.toString().trim(),
            company: queryFilter.company?.toString().trim() 
        }
        
        return this._userExplorerService.getUserBySearch(filters)
    }

    saveUser(user: userDTO) {
        return this._userExplorerService.saveUser(user)
    }
}