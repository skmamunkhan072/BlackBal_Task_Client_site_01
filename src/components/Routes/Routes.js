import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import AddTask from "../page/AddTask/AddTask";
import Home from "../page/Home/Home/Home";
import Error from "../Shear/Error/Error";
import MyTask from "../page/MyTask/MyTask.jsx";
import CompletedTask from "../page/CompletedTask/CompletedTask.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/add-task", element: <AddTask /> },
      { path: "/media", element: <MyTask /> },
      { path: "/completed-task", element: <CompletedTask /> },
    ],
  },
]);
