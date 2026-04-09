import { Request, Response } from 'express';

import UserExplorerService from '../services/userService';
import { userDTO, searchCriteria, User } from '../domain/user';

import { EntityNotFound } from '../error/appError';

export default class UserExplorerController {

    private _userExplorerService: UserExplorerService;

    constructor(userExplorerService: UserExplorerService) {
        this._userExplorerService = userExplorerService;
    }

    public getUsers(req: Request, res: Response) {
        if (req.query != undefined) {
            const queryCriteria: searchCriteria = req.query;
            const result = this._userExplorerService.getUserBySearch(queryCriteria);
            if (!result.success) throw new EntityNotFound(result.message, 404);
            return res.status(200).json(result);
        }
        const users = this._userExplorerService.getUsers();
        return res.status(200).json(users);
    }

    public getUsersById(req: Request, res: Response) {
        const id: string = String(req.params.id);
        const result = this._userExplorerService.getUsersById(id);
        if (!result.success) throw new EntityNotFound(result.message, 404);
        return res.status(200).json(result.data);
    }

    public saveUser(user: userDTO) {
        return this._userExplorerService.saveUser(user)
    }
}