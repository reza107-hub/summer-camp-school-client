import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoutes";
import PaymentPage from "../Pages/Dashboard/PaymentPage/PaymentPage";
import Dashboard from "../LayOut/Dashboard";
import SelectedClass from "../Pages/Dashboard/SelectedClass/SelectedClass";
import EnrolledClasses from "../Pages/Dashboard/EnrolledClasses/EnrolledClasses";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <SelectedClass />,
      },
      {
        path: "/dashboard/payment/:id",
        element: <PaymentPage />,
      },
      {
        path: "/dashboard/enrolledclasses",
        element: <EnrolledClasses />,
      },
    ],
  },
]);
