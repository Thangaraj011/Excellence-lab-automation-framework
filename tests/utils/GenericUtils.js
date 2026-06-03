import users from '../data/users.json';
import crypto from 'crypto';

const SECRET = "j4dFtlJH68pdc9A4";
const FRONTEND_BASE_URL = process.env.BASE_FE_URL || 'http://localhost:3000';

export class GenericUtils {
    constructor(context) {
        this.context = context;
    }

    async base64Url(buf) {
        return Buffer.from(buf)
            .toString("base64")
            .replace(/\+/g, "-")
            .replace(/\//g, "_")
            .replace(/=/g, "");
    }

    async generateJWT(userRole) {
        const role = userRole;
        if (!role) throw new Error('USER_ROLE is not defined in .env');
        const user = users[role];
        if (!user) {
            throw new Error(`Invalid user role provided: ${role}. Please check users.json keys.`);
        }
        const payload = { ...user, exp: Math.floor(Date.now() / 1000) + 86400 * 7 };
        const header  = await this.base64Url(Buffer.from(JSON.stringify({ alg: "HS256", typ: "JWT" })));
        const body    = await this.base64Url(Buffer.from(JSON.stringify(payload)));
        const signingInput = `${header}.${body}`;
    
        const sig = crypto
            .createHmac("sha256", SECRET)
            .update(signingInput)
            .digest();

        return `${signingInput}.${await this.base64Url(sig)}`;
    }

    async setupAuthCookie(token) {
        const context = this.context;
        if (!context) {
            throw new Error('Browser context is not initialized. Call init() before setupAuthCookie().');
        }

        await context.addCookies([
        {
            name:     "token",
            value:    token,
            domain:   "learning-buddy-dev-backend-service-346514237201.us-central1.run.app",
            path:     "/",
            httpOnly: false,
            secure:   true,
            sameSite: "None",
            expires:  Math.floor(Date.now() / 1000) + 604800, // 7 days
        },
        ]);
}


}