const setCookie = (str, token = 'token') => document.cookie = `${token}=${str}; expires=${new Date(Date.now() + 15 * 60 * 1000).toUTCString()}`;

export default setCookie;

