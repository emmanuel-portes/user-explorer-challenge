import UserExplorerService from '../services/userService'
import { userDTO, User } from '../domain/user'

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

    getUserBySearch(search: string) {
        return this._userExplorerService.getUserBySearch(search)
    }

    getUserByCity(city: string) {
        return this._userExplorerService.getUserByCity(city)
    }

    getUserByCompany(company: string){
        return this._userExplorerService.getUserByCompany(company)
    }

    saveUser(user: userDTO) {
        return this._userExplorerService.saveUser(user)
    }
}