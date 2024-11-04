import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./Components/Root/Root";
import ErrorPage from './Components/ErrorPage/ErrorPage'
import Home from "./Components/Home/Home";
import GadgetDetail from "./Components/GadgetDetail/GadgetDetail";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
   errorElement:<ErrorPage></ErrorPage>,
   children:[
    {
      path: '/',
      element:<Home></Home>
    },
    {
      path:'/gadget/:gadgetId',
      loader:()=>fetch(`/fakeGadget.json`),
      element:<GadgetDetail></GadgetDetail>
    }
   ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
