import users from '../data/users.json';
import crypto from 'crypto';
const fs = require("fs");
const path = require("path");

const SECRET = "j4dFtlJH68pdc9A4";
const FRONTEND_BASE_URL = process.env.BASE_FE_URL || 'http://localhost:3000';

export class GenericUtils {
    constructor(context, testInfo) {
        this.context = context;
        this.testInfo = testInfo;
        this.jsonObject = null;
        this.map = null;
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

    async setJsonData() {
        const fileName = `${this.testInfo.title}.json`;
        const filePath = path.resolve(__dirname, "../data", fileName);
        console.log(`filePath: ${filePath}`);
        try {
            const raw = fs.readFileSync(filePath, "utf-8");
            this.jsonObject = JSON.parse(raw);
            return this.jsonObject;
        } catch (err) {
            throw new Error(`Failed to load test data from "${filePath}": ${err.message}`);
        }
    }

    async jsonToMap() {
        if(!this.jsonObject) {
            await this.setJsonData();
        }
        const convert = (obj) => {
            const currentMap = new Map();
            for (const [key, value] of Object.entries(obj)) {
                if (value !== null && typeof value === "object" && !Array.isArray(value)) {
                    currentMap.set(key, convert(value));
                } else {
                    currentMap.set(key, value);
                }
        }
        return currentMap;   
        };
        this.map = await convert(this.jsonObject);
        return this.map;
    }

    async getValueByKey(key) {
        if (!this.jsonObject) {
            await this.setJsonData();
        }
        const search = (obj) => {
            if (obj === null || typeof obj !== "object") return undefined;
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                return obj[key];
             }
        for (const value of Object.values(obj)) {
            if (value !== null && typeof value === "object") {
                const found = search(value);
                if (found !== undefined) return found;
            }
        }
        return undefined;
        };
    return search(this.jsonObject);
    }




}