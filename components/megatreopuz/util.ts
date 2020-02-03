import { GoogleLoginResponse } from "react-google-login";
import cookie from "js-cookie";

export function removeCookies() {
    cookie.remove("access_token");
    cookie.remove("expires_at");
}

export async function reloadToken(user: GoogleLoginResponse) {
    // Get a new token
    try {
        const res = await user.reloadAuthResponse();
        cookie.set("access_token", res.id_token);
        cookie.set("expires_at", res.expires_at.toString(), {
            expires: new Date(res.expires_at),
            sameSite: "strict"
        });

        // A minute before
        const timeToExpire = res.expires_at - Date.now() - 60 * 60 * 100;
        if (timeToExpire <= 0) {
            removeCookies();
            throw new Error("Invalid cookie. Please log in again");
        }
        setTimeout(() => reloadToken(user), timeToExpire);
    } catch (error) {
        console.error((error as Error).message);
    }
    return;
}
