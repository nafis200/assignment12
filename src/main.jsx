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
import Paymnet from "./components/payments/Paymnet";
import Createsurvey from "./components/survey/Createsurvey";
import Surveyspage from "./components/public/Surveyspage";
import Surveydetials from "./components/public/Surveydetials";
import Dashboard from "./components/Dashboard/Dashboard";
import Userservey from "./components/Dashboard/userhome/Userservey";
import Usersurveydetail from "./components/Dashboard/userhome/Usersurveydetail";
import UserReport from "./components/Dashboard/userreport/UserReport";
import UserReprotdetails from "./components/Dashboard/userreport/UserReprotdetails";
import Wellcome from "./components/Dashboard/Wellcome";
import Commentdetails from "./components/Dashboard/comments/Commentdetails";
import Comment from "./components/Dashboard/comments/Comment";
import AdminRoute from "./components/AdminRoute"
import Publish from "./components/Dashboard/admindashboard/Publish";
import Adminpayment from "./components/Dashboard/response/Adminpayment";
import Adminresponse from "./components/Dashboard/response/Adminresponse";
import Update from "./components/Dashboard/updateSection/Update";
import Updateform from "./components/Dashboard/updateSection/Updateform";
import Feedback from "./components/Dashboard/Feedback";
import Surveyresponse from "./components/Dashboard/Surveyresponse";
import Surveyresponsedetails from "./components/Dashboard/Surveyresponsedetails";
import Privateroute from "./components/Privateroute";

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
        path:'/paymnet',
        element:<Paymnet></Paymnet>
      },
      {
        path:'/surveypages',
        element:<Surveyspage></Surveyspage>
      },
      {
         path:'/surveydetails/:id',
         element:<Surveydetials></Surveydetials>,
         loader:({params})=>fetch(`http://localhost:5000/details/${params.id}`)
      },
      
    ]
  },
  {
     path:'dashboard',
     element: <Privateroute><Dashboard></Dashboard></Privateroute>,
     children:[
        {
          path:'wellcome',
          element:<Wellcome></Wellcome>
        },
        {
          path:'usersurvey',
          element:<Userservey></Userservey>,
        },
        {
          path:'userreport',
          element:<UserReport></UserReport>
        },
        {
          path:'userSurveydetails/:id', 
          element:<Usersurveydetail></Usersurveydetail>,
          loader:({params})=>fetch(`http://localhost:5000/details/${params.id}`)
       },
       {
          path:'userreportdetails/:id',
          element:<UserReprotdetails></UserReprotdetails>,
          loader:({params})=>fetch(`http://localhost:5000/details/${params.id}`)
       },
       {
         path:'comment/:id',
         element:<Commentdetails></Commentdetails>
       },
       {
         path:'comment',
         element:<Comment></Comment>
       },
       {
        path:'alluser',
        element:<AdminRoute><Allusers></Allusers></AdminRoute>
      },
      {
        path:'publish',
        element:<AdminRoute><Publish></Publish></AdminRoute>
      },
      {
        path:'adminpayment',
        element:<Adminpayment></Adminpayment>
      },
      {
        path:'adminresponse',
        element:<Adminresponse></Adminresponse>
      },
      {
        path:'createsurvey',
        element:<Createsurvey></Createsurvey>
      },
      {
         path:'updates',
         element:<Update></Update>
      },
      {
        path:'updates/:id',
        element:<Updateform></Updateform>,
        loader:({params})=>fetch(`http://localhost:5000/surveyors/${params.id}`)
      },
      {
        path:'feedback',
        element:<Feedback></Feedback>
      },
      {
        path:'response',
        element:<Surveyresponse></Surveyresponse>
      },
      {
        path:'uniqueresponse/:id',
        element:<Surveyresponsedetails></Surveyresponsedetails>,
        loader:({params})=>fetch(`http://localhost:5000/surveyunique/${params.id}`)
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
