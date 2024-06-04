import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main";
import Errorelement from "./components/Errorelement";
import Home from "./components/Home";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Authprovider from "./components/Authprovider";

import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import Admin from "./components/Admin";
import Allusers from "./components/Allusers";
import AdminRoute from "./components/AdminRoute";
import Paymnet from "./components/payments/Paymnet";
import Createsurvey from "./components/survey/Createsurvey";
import Surveyspage from "./components/public/Surveyspage";
import Surveydetials from "./components/public/Surveydetials";

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Errorelement></Errorelement>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <Registration></Registration>
      },
      {
        path:'/admin',
        element:<Admin></Admin>
      },
      {
        path:'/alluser',
        element:<AdminRoute><Allusers></Allusers></AdminRoute>
      },
      {
        path:'/paymnet',
        element:<Paymnet></Paymnet>
      },
      {
        path:'/createsurvey',
        element:<Createsurvey></Createsurvey>
      },
      {
        path:'/surveypages',
        element:<Surveyspage></Surveyspage>
      },
      {
         path:'/surveydetails/:id',
         element: <Surveydetials></Surveydetials>,
         loader:({params})=>fetch(`http://localhost:5000/details/${params.id}`)
      }

    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authprovider>
      <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      </QueryClientProvider>
    </Authprovider>
  </React.StrictMode>
);
