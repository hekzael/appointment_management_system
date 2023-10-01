import { Outlet, RouteObject, RouterProvider, createBrowserRouter } from "react-router-dom";
import { PublicLayout } from "../components/layouts";
import { Home } from "../components/public/Home";

const router: RouteObject[] = [
  {

    element: <PublicLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <h1>Login</h1>,
      },
      {
        path: "signup",
        element: <h1>Signup</h1>,
      },
    ],
  },
  {
    path: "/private",
    element: <><h1>Private Home</h1> <Outlet /></>,
    children: [
      {
        path: "dashboard",
        element: <h1>Dashboard</h1>,
      },
      {
        path: "cites",
        element: <h1>Cites</h1>,
      },
    ],
  },
];

const RouterApp = () => {
  return <RouterProvider router={createBrowserRouter(router)} />;
};

export default RouterApp;
