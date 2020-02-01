export function getTokken() {
    if (!document) {
        return "";
    }
    const cookies = document.cookie.split("access_token=");
    if (cookies.length !== 2) {
        return "";
    }
    const token = cookies[1].split(";")[0];
    return token;
}
