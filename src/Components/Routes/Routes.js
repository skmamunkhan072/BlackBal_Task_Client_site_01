import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import CompleteTask from "../Page/CompleteTask/CompleteTask";
import Home from "../Page/Home/Home/Home";
import Login from "../Page/Login/Login";
import MyTask from "../Page/MyTask/MyTask";
import SingUp from "../Page/SingUp/SingUp";
import Error from "../Shear/Error/Error";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

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
      {
        path: "/sing-up",
        element: <SingUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/media",
        element: (
          <PrivateRoute>
            <MyTask />
          </PrivateRoute>
        ),
      },
      {
        path: "/complete-task",
        element: (
          <PrivateRoute>
            <CompleteTask />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
