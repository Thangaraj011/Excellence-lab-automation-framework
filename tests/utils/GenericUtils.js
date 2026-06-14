import { fileURLToPath } from 'url';
import path from'path';
import fs from 'fs';
import crypto from 'crypto';
import { createRequire } from 'module';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

const require = createRequire(import.meta.url);
const users   = require('../data/users.json');

const SECRET = process.env.JWT_SECRET || "j4dFtlJH68pdc9A4";
const TOKEN_TTL_SECONDS = 86400 * 7;
const FRONTEND_BASE_URL = process.env.BASE_URL || 'http://localhost:3000';
const BACKEND_BASE_URL = process.env.BASE_BE_URL || 'http://localhost:3001';

export class GenericUtils {
    constructor(context, testInfo) {
        this.context = context;
        this.testInfo = testInfo;
        this.jsonObject = null;
        this.map = null;
    }

    base64Url(buf) {
        return Buffer.from(buf)
        .toString("base64")
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=/g, "");
    }

    async generateJWT(userRole) {
        const role = userRole;
        if (!role) throw new Error('generateJWT: no user role provided. Pass a key that exists in users.json.');
        
        const user = users[role];
        if (!user) {
            throw new Error(`Invalid user role provided: ${role}. Please check users.json keys.`);
        }

        const payload = { ...user, exp: Math.floor(Date.now() / 1000) + TOKEN_TTL_SECONDS };
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
            throw new Error('Browser context is not initialized before setupAuthCookie().');
        }

        const backendDomain = new URL(BACKEND_BASE_URL).hostname;
        const expires = Math.floor(Date.now() / 1000) + TOKEN_TTL_SECONDS;

        await context.addCookies([
        {
            name:     "token",
            value:    token,
            domain:   backendDomain,
            path:     "/",
            httpOnly: false,
            secure:   true,
            sameSite: "None",
            expires,
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
    if (!this.jsonObject) {
        await this.setJsonData();
    }
    this.map = new Map();
    const convert = (obj, currentMap) => {
        for (const [key, value] of Object.entries(obj)) {
            if (value !== null && typeof value === "object" && !Array.isArray(value)) {
                const subMap = new Map();
                currentMap.set(key, subMap);
                if (currentMap !== this.map) {
                    this.map.set(key, subMap);
                }
                convert(value, subMap);
            } else {
                currentMap.set(key, value);
                this.map.set(key, value);
            }
        }
    };

    convert(this.jsonObject, this.map);
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