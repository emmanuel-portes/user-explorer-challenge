import { Request, Response } from 'express';

import UserExplorerService from '../services/userService';
import { searchCriteria } from '../domain/user';

import { EntityNotFound, UnprocessableEntity } from '../error/appError';

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

    public saveUser(req: Request, res: Response) {
        const result = this._userExplorerService.saveUser(req.body);
        if (!result.success) throw new UnprocessableEntity(result.message, 422, result.data);
        return res.status(201).json(result); 
    }
}