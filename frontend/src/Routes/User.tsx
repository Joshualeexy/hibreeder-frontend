import paths from "./paths";
import type { RouteObject } from "react-router-dom";
import Feeds from "../Pages/User/Feeds";

export default [
  {
    path: paths.user.feeds,
    element: <Feeds/>
  }
] as RouteObject[];