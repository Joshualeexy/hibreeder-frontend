import paths from "./paths";
import type { RouteObject } from "react-router-dom";

export default [
  {
    path: paths.user.dashboard,
    element: <div>User Dashboard</div>
  }
] as RouteObject[];