export const setInLocalStorage = (key: string, value: object) => {
    if (!key || typeof window === "undefined") {
        return {}
    }
    localStorage.setItem(key, JSON.stringify(value));
}
export const getFormLocalStorage = (key: string) => {
    if (!key || typeof window === "undefined") {
        return {}
    }
    const data = localStorage.getItem(key);
    
    if (!data) {
        return {}
    }
    return JSON.parse(data);
}