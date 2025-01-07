import { useRoutes } from "react-router-dom";
import { Login } from "../../pages";

function LoginRoutes() {
  return useRoutes([
    {
      path: "/",
      element: <Login />,
    },
  ]);
}

export default LoginRoutes;
