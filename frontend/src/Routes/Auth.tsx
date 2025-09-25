import type { RouteObject } from "react-router-dom";
import paths from "./paths";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import ForgotPassword from '../Pages/Auth/ForgotPassword';
import Verify from "../Pages/Auth/Verify";

export default [
    {
        path: paths.login,
        element: <Login />
    },
    {
        path: paths.register,
        element: <Register />
    },
    {
        path: paths.forgotPassword,
        element: <ForgotPassword />
    },
    {
        path: paths.verify,
        element: <Verify/>
    }
] as RouteObject[];