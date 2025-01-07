import { useRoutes } from "react-router-dom";
import { Home } from "../../pages";

function DashboardRoutes() {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
  ]);
}

export default DashboardRoutes;
