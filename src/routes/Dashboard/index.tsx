import { useRoutes } from "react-router-dom";
import { Playlist, Home, Artist } from "../../pages";
import Sidebar from "../../components/sidebar/Sidebar";

function DashboardRoutes() {
  return (
    <main className="grid grid-cols-5 w-full h-full">
      <Sidebar />
      {useRoutes([
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/playlist/:id",
          element: <Playlist />,
        },
        {
          path: "/artist/:id",
          element: <Artist />,
        },
      ])}
    </main>
  );
}

export default DashboardRoutes;
