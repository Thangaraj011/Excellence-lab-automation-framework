import {test, expect} from '@playwright/test';
import { isStateValid, describeState } from '../utils/tokenCheck.js';
import { GenericUtils } from '../utils/GenericUtils.js';
import fs from 'fs';
import path from 'path';

const checkOpts = { cookieName: 'token' };
const BACKEND = process.env.BASE_BE_URL || 'http://localhost:3001';

const ALL_PROFILES = [
    { name: 'Employee',         envUser: 'EMP_USER',           file: 'auth/user.json',            key: 'employee' },
    { name: 'Manager Indirect', envUser: 'MANAGER_IND_USER',   file: 'auth/managerindirect.json', key: 'managerindirect' },
    { name: 'Manager Direct',   envUser: 'MANAGER_DIR_USER',   file: 'auth/managerdirect.json',   key: 'managerdirect' },
    { name: 'Admin',            envUser: 'ADMIN_USER',         file: 'auth/admin.json',           key: 'admin' },
    { name: 'Manager-Admin',    envUser: 'ADMIN_MANAGER_USER', file: 'auth/adminmanager.json',    key: 'adminmanager' },
];

const wanted = (process.env.AUTH_PROFILES || '')
  .split(',').map(s => s.trim()).filter(Boolean);

const profiles = wanted.length
  ? ALL_PROFILES.filter(p => wanted.includes(p.key))
  : ALL_PROFILES;

test.describe('Generate and set token for local storage', ()=>{
    for(const profile of profiles){
        test(`Generate token for ${profile.name}`, async({}, testInfo)=>{
            console.log(describeState(profile.file, checkOpts));

            if(isStateValid(profile.file, checkOpts)){
                test.skip(true, `${profile.name} token still valid — reusing ${profile.file}`);
                return;
            }

            const user = process.env[profile.envUser];
            expect(user, `Missing env var ${profile.envUser}`).toBeTruthy();
            
            const utils = new GenericUtils(null, testInfo);
            const token = await utils.generateJWT(user);

            const state = {
            cookies: [{
            name: 'token',
            value: token,
            domain: new URL(BACKEND).hostname,
            path: '/',
            httpOnly: false,
            secure: true,
            sameSite: 'None',
            expires: Math.floor(Date.now() / 1000) + 86400 * 7,
            }],
            origins: [],
        };
            fs.mkdirSync(path.dirname(profile.file), { recursive: true });
            fs.writeFileSync(profile.file, JSON.stringify(state, null, 2));
        });

    }
});