import { NextPage } from "next";
import React from "react";
import GoogleLogin, {
    GoogleLoginResponse,
    GoogleLoginResponseOffline
} from "react-google-login";
import { useRouter } from "next/router";

const checkUser = (
    googleUser: GoogleLoginResponseOffline | GoogleLoginResponse
): Promise<boolean | void> => {
    if ("code" in googleUser) return Promise.resolve(false);
    const token = googleUser.getAuthResponse().id_token;
    document.cookie = `access_token=${token}`;

    return fetch(`${process.env.MEGATREOPUZ_SERVER}/authenticate`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            authentication: token
        })
    })
        .then(res => res.json())
        .then(({ exists }: { exists: boolean }) => exists)
        .catch(console.error);
};

interface Props {
    loading: boolean;
    setLoading: (b: boolean) => void;
}

const LoginPage: NextPage<Props> = ({ setLoading }) => {
    const router = useRouter();
    return (
        <>
            <GoogleLogin
                clientId="65422568192-gsadmvg60atvtnpqvs3t0r43f213sgme.apps.googleusercontent.com"
                onSuccess={async (
                    googleUser: GoogleLoginResponseOffline | GoogleLoginResponse
                ) => {
                    setLoading(true);
                    const response = await checkUser(googleUser);
                    setLoading(false);
                    if (response) router.replace("/megatreopuz/dashboard");
                    else router.replace("/megatreopuz/createUser");
                }}
                onFailure={console.error}
            />
        </>
    );
};

export default LoginPage;
