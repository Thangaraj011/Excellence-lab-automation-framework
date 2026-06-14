import fs from 'fs';

function getJwtExpMs(token) {
  try {
    const parts = token.split('.');
    if (parts.length < 2) return null;
 
    const base64 = parts[1].replace(/-/g, '+').replace(/_/g, '/');
    const payload = JSON.parse(Buffer.from(base64, 'base64').toString('utf8'));
 
    return payload.exp ? payload.exp * 1000 : null;
  } catch {
    return null;
  }
}

function getTokenFromStateFile(filePath, { cookieName, storageKey } = {}) {
  if (!fs.existsSync(filePath)) return null;
  let state;
  try {
    state = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch {
    return null;
  }

  if (cookieName && Array.isArray(state.cookies)) {
    const cookie = state.cookies.find((c) => c.name === cookieName);
    if (cookie?.value) return cookie.value;
  }

  if (storageKey && Array.isArray(state.origins)) {
    for (const origin of state.origins) {
      const entry = origin.localStorage?.find((kv) => kv.name === storageKey);
      if (entry?.value) return entry.value;
    }
  }

  return null;
}

export function isStateValid(filePath, opts) {
    const { skewMs = 60_000 } = opts;

    const token = getTokenFromStateFile(filePath, opts);
    if (!token) return false;

    const expMs = getJwtExpMs(token);
    if (!expMs) return false;

    return Date.now() < expMs - skewMs;
}

export function describeState(filePath, opts = {}) {
  const token = getTokenFromStateFile(filePath, opts);
  if (!token) return `${filePath}: no file/token → regenerate`;
  const expMs = getJwtExpMs(token);
  if (!expMs) return `${filePath}: token has no readable exp → regenerate`;
  const mins = Math.round((expMs - Date.now()) / 60000);
  return mins > 0
    ? `${filePath}: valid for ~${mins} min → reuse`
    : `${filePath}: expired ${Math.abs(mins)} min ago → regenerate`;
}