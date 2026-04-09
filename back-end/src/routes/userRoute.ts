import express from 'express';
import { body } from 'express-validator';

import { validate } from '../middleware/validation'

import UserExplorerController from '../controllers/userController'; 
import UserExplorerService from '../services/userService';
import { EntityNotFound, UnprocessableEntity } from '../error/appError';

const userExplorerService = new UserExplorerService();
const userExplorerController = new UserExplorerController(userExplorerService);

const router = express.Router({ mergeParams: true })

router.get('/users', userExplorerController.getUsers.bind(userExplorerController));

router.get('/users/:id', userExplorerController.getUsersById.bind(userExplorerController) );

router.post('/users', [
        body("name")
            .notEmpty().withMessage("Name is required")
            .trim()
            .isLength({ min: 2, max: 50}).withMessage("Name must be between 2 and 50 characters"),
        body("email")
            .notEmpty().withMessage("Email is required")
            .trim()
            .isEmail().withMessage("Email provided in a wrong format"),
        body("phone")
            .notEmpty().withMessage("Phone is required")
            .trim()
            .isMobilePhone('es-DO').withMessage("Phone provided with a wrong format"),
        body("company")
            .notEmpty().withMessage("Company is required")
            .trim()
            .isLength({min: 3, max: 50}).withMessage("Company must be between 3 and 50 characters"),
        body("city")
            .notEmpty().withMessage("City is required")
            .trim()
            .isLength({min: 5, max: 50}).withMessage("City must be between 5 and 50 characters")
    ], validate, userExplorerController.saveUser.bind(userExplorerController));

export default router