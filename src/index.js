import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import Error from './Error';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
import Body from './components/Body/Body';
import RestraurantMenu from './components/RestraurantMenu/RestraurantMenu';


export const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Body/>
      },
      {
        path:'/about',
        element:<AboutUs/>
      },
      {
        path:'/contact',
        element:<ContactUs/>
      },
      {
        path:'/restaurant/:resId',
        element:<RestraurantMenu/>
      },
    ],
    errorElement:<Error/>
  },
 

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>
);
