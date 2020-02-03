import { useRouter } from "next/router";
import cookie from "js-cookie";
import { removeCookies } from "./util";
export function useAuth(showError: (e: Error) => void) {
    // Check if there are any cookies
    const router = useRouter();
    const token = cookie.get("access_token");
    const expiresAt = parseInt(cookie.get("expires_at") || "0");

    if (!token || !expiresAt) return;

    // When the token is about to expire, show a message and then log the user out
    const timeToExpire = Date.now() - expiresAt;
    // 5 minutes before the token expiry
    setTimeout(() => {
        showError(new Error("Google Login expired. Please log in again."));
        removeCookies();
        router.replace("/megatreopuz/signIn");
    }, timeToExpire - 1 * 60 * 60 * 1000);
}
