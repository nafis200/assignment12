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
import Dashboard from "./components/Dashboard/Dashboard";
import Userservey from "./components/Dashboard/userhome/Userservey";
import Usersurveydetail from "./components/Dashboard/userhome/Usersurveydetail";

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
      },
      {
         path:'/userSurveydetails/:id', 
         element:<Usersurveydetail></Usersurveydetail>,
         loader:({params})=>fetch(`http://localhost:5000/details/${params.id}`)
      }

    ]
  },
  {
     path:'dashboard',
     element:<Dashboard></Dashboard>,
     children:[
        {
          path:'usersurvey',
          element:<Userservey></Userservey>,
        },
        {

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
