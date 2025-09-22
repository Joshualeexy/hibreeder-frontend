import type { RouteObject } from "react-router-dom";
import paths from "./paths";
import Login from "../Pages/Auth/Login";

export default [
    {
        path: paths.login,
        element: <Login/>

    }
] as RouteObject[];