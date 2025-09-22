import Admin from "./Admin"
import Breeder from "./Breeder"
import User from "./User"
import { createBrowserRouter, Navigate } from "react-router-dom"
import paths from "./paths"
import Welcome from "../Pages/Welcome"
import Auth from "./Auth"
const Router = createBrowserRouter([
    {
        path: paths.home,
        element: <Welcome />
    }, {
        path: paths.index,
        element: <Navigate to={paths.home} />
    },
    ...User,
    ...Auth
    // ...Admin,
    // ...Breeder,
])


export default Router
