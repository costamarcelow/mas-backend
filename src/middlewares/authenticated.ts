import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken';
import authConfig from '../config/auth';
//import APIError from "../shared/APIError";


interface Token {
    sub: string;
    role: string;
}

export default function authenticated(request: Request, response: Response, next: NextFunction): void {

    const headerAuthorization = request.headers.authorization

    if (!headerAuthorization) {
        throw new APIError('JWT token not found', 401)
    }

    const [, token] = headerAuthorization.split(' ');

    const verifyToken = verify(token, authConfig.jwt.secret);

    if (!verifyToken) {
        throw new Error();
    }

    const { sub, role } = verifyToken as Token


    request.body.user = {
        id: sub,
        role: role
    }

    return next();

}
