import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPAge/ErrorPage';
import HomePage from './Components/HomaPage/HomePAge';
import AllData from './Components/AllData/AllData';
import Laptop from './Components/Laptop/Laptop';
import Mobile from './Components/Mobile/Mobile';
import Accessories from './Components/Accessories/Accessories';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<HomePage></HomePage>
      },
      {
        path:'/allData',
        element:<AllData></AllData>
      },
      {
        path:'/laptop',
        element:<Laptop></Laptop>
      },
      {
        path:'/mobile',
        element:<Mobile></Mobile>
      },
      {
        path:'accessories',
        element:<Accessories></Accessories>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router} />
  </StrictMode>,
)
