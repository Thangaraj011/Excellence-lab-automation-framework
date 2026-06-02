import users from '../data/users.json';
import crypto from 'crypto';

const SECRET = "j4dFtlJH68pdc9A4";

export class GenericUtils {
    async generateJWT(userRole) {
        const role = userRole;
        if (!role) throw new Error('USER_ROLE is not defined in .env');
        const user = users[role];
        if (!user) {
            throw new Error(`Invalid user role provided: ${role}. Please check users.json keys.`);
        }
        const expiry = Math.floor(Date.now() / 1000) + 604800; // 7 days from now
        const payload = { ...user, exp: expiry };

        const header = { alg: "HS256", typ: "JWT" };
    
        const base64Url = (obj) =>
            Buffer.from(JSON.stringify(obj))
                .toString('base64')
                .replace(/=/g, '')
                .replace(/\+/g, '-')
                .replace(/\//g, '_');
    
        const head = base64Url(header);
        const body = base64Url(payload);
    
        const signature = crypto
            .createHmac('sha256', SECRET)
            .update(`${head}.${body}`)
            .digest('base64')
            .replace(/=/g, '')
            .replace(/\+/g, '-')
            .replace(/\//g, '_');
    
        return `${head}.${body}.${signature}`;
    }
}