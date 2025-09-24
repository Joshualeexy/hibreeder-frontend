import { GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
type GoogleLoginButtonProps = {
    text?: string;
};
const redirectUri = window.location.href;

const GoogleLoginButton: React.FC<GoogleLoginButtonProps> = ({ text = "Login with Google" }) => {
    const Glogin = async (): Promise<void> => {
        const nonce = Math.random().toString(36).substring(2);
        const authUrl =
            `https://accounts.google.com/o/oauth2/v2/auth?` +
            `client_id=${clientId}&` +
            `redirect_uri=${encodeURIComponent(redirectUri)}&` +
            `response_type=id_token&` +
            `scope=openid%20email%20profile&` +
            `nonce=${nonce}&` +
            `prompt=select_account`;

        // Redirect user to Google OAuth
        window.location.href = authUrl;
    };

    return (
        <GoogleOAuthProvider clientId={clientId}>
            <button type={"button"}
                onClick={Glogin}
                className="flex items-center justify-center gap-2 px-4 py-[11px] rounded-lg shadow-md bg-white border text-sm sm:text-lgs border-red-200 hover:bg-gray-100 transition w-full "
            >
                <FcGoogle className="text-xl" />
                <span className="font-medium text-gray-700">{text}</span>
            </button>
        </GoogleOAuthProvider>
    );
};

export default GoogleLoginButton;
