import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Page/Home/Home";
import MyTask from "../Page/MyTask/MyTask";
import SingUp from "../Page/SingUp/SingUp";
import Error from "../Shear/Error/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/sing-up", element: <SingUp /> },
      { path: "/media", element: <MyTask /> },
    ],
  },
]);
