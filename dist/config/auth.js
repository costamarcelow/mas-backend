"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    jwt: {
        privateKey: process.env.JWT_PRIVATE_KEY || 'default',
        publicKey: process.env.JWT_PUBLIC_KEY || 'default',
        secret: process.env.APP_SECRET || 'default',
        expiresIn: '1d',
    },
};
