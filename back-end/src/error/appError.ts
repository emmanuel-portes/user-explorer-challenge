import { userDTO } from "../domain/user";

export class AppError extends Error {
    public statusCode: number;
    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode
    }
}

export class EntityNotFound extends AppError {
    constructor(message: string | any, statusCode: number) {
        super(message, statusCode)
    }
}

export class UnprocessableEntity extends AppError {
    public data: userDTO;
    constructor(message: string, statusCode:number, data: userDTO | any) {
        super(message, statusCode)
        this.data = data
    }
}

