export const parseString = (str: string) => JSON.parse(str);

export const LS = {
    get: (key: string) => localStorage.getItem(key) || '',
    set: (key: string, value: string) => localStorage.setItem(key, value),
    remove: (keys: string[]) => keys.forEach(key => localStorage.removeItem(key)),
}

export const parsedLSitem = (key: string) => {
    const localStorageUser = LS.get(key);
    return localStorageUser ? parseString(localStorageUser) : null
}

export const getAuthToken = () => {
    const userToken = LS.get('userToken');
    const { tokenType, accessToken } = JSON.parse(userToken);

    return `${tokenType} ${accessToken}`;
}
