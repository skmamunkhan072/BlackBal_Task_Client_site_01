import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import AddTask from "../page/AddTask/AddTask";
import Home from "../page/Home/Home/Home";
import Error from "../Shear/Error/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/add-task", element: <AddTask /> },
    ],
  },
]);
