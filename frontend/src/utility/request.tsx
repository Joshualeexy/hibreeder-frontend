import axios from "axios";
import utility from "./utility";

type Data = Record<string, string | number | boolean | object | Array<any>>;

type Opts = {
    timeout?: number;
    method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
    headers?: Record<string, string>;
    sanctumRequest?: boolean
};

type ApiResponse<T = any> =
    | { status: "success"; payload: T }
    | {
        status: "failed";
        message: string;
        errors: Record<string, string[]>;
        statusText: string;
        statusCode: number;
    };

const { normalizeEndpoint, getOrigin } = utility();

function getXsrfToken(): string | null {
    const match = document.cookie.match(/XSRF-TOKEN=([^;]+)/);
    return match ? decodeURIComponent(match[1]) : null;
}

export default async function request<T = any>(
    
    _endpoint: string,
    _data: Data = {},
    _opts: Opts = {sanctumRequest:false},
): Promise<ApiResponse<T>> {
    const baseURL = getOrigin()
    const sanctumBaseURL = getOrigin(false)
    _endpoint = normalizeEndpoint(_endpoint);
    const url = `${_opts.sanctumRequest ? sanctumBaseURL : baseURL}${_endpoint}`;
    const method = (_opts.method || "POST").toUpperCase();

    try {
        // If CSRF cookie missing, auto-fetch it
        if (!getXsrfToken()) {
            await axios.get(`${getOrigin(false)}/sanctum/csrf-cookie`, { withCredentials: true });
        }

        const config = {
            ..._opts,
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "X-Requested-With": "XMLHttpRequest",
                "X-XSRF-TOKEN": getXsrfToken() ?? "",
                
                ...(_opts?.headers || {}),
            },
        };

        const response =
            method == "GET"
                ? await axios.get(url, config)
                : await axios.request({
                    url,
                    method,
                    data: _data,
                    ...config,
                });


        return {
            status: "success",
            payload: response.data,
        };
    } catch (err: any) {
        const res = err?.response;

        return {
            status: "failed",
            message: res?.data?.message || err.message || "Unknown error",
            errors: res?.data?.errors,
            statusCode: res?.status || 500,
            statusText: res?.statusText || "Server Error",
        };
    }
}
