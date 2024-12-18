import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import AllTreatment from "../components/AllTreatment";
import MyAppoinment from "../components/MyAppoinment";
import Profile from "../components/Profile";
import Details from "../components/Details";
import Register from "../components/Register";
import Login from "../components/Login";
import PrivateRoute from "../components/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          const servicesRes = await fetch("/service.json");
          const servicesData = await servicesRes.json();
          const feedbackres = await fetch("/review.json");
          const feedbackData = await feedbackres.json();
          return { servicesData, feedbackData };
        },
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/allTreatment",
        element: <AllTreatment></AllTreatment>,
        loader: () => fetch("/service.json"),
      },
      {
        path: "/myAppoinment",
        element: (
          <PrivateRoute>
            <MyAppoinment></MyAppoinment>
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const res = await fetch("/service.json");
          const data = await res.json();
          const singleData = data.find((d) => d.id == params.id);
          console.log(singleData);
          return singleData;
        },
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
