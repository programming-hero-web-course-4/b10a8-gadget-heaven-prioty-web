import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import Root from './Root/Root'
import Home from './Home/Home'
import Details from './Home/Details'
import Error from './Error/Error'
import Statistic from './Statistic/Statistic'
import Dashboard from './Dashboard/Dashboard'
import About from './About/About'
import AllCatagory from './Catagories/AllCatagory'
import LaptopCatagory from './Catagories/LaptopCatagory'
import SmartphoneCatagory from './Catagories/SmartphoneCatagory'
import Accessory from './Catagories/Accessory'
import Smartwatch from './Catagories/Smartwatch'
import Monitors from './Catagories/Monitors'
import ShortByPrice from './Catagories/ShortByPrice'
import Chart from './Dashboard/Chart'
import Wishlist from './Dashboard/Wishlist'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:([
      {
        path: "/",
        loader:()=> fetch(`/FakeData/gadgets.json`),
        element: <Home></Home>,
        children: ([
          {
            path:'/',
            loader:()=> fetch(`/FakeData/gadgets.json`),
            element: <AllCatagory></AllCatagory>
          },
          {
            path:'/laptop',
            loader:()=> fetch(`/FakeData/gadgets.json`),
            element: <LaptopCatagory></LaptopCatagory>
          },
          {
            path:'/smartphone',
            loader:()=> fetch(`/FakeData/gadgets.json`),
            element: <SmartphoneCatagory></SmartphoneCatagory>
          },
          {
            path:'/accessories',
            loader:()=> fetch(`/FakeData/gadgets.json`),
            element: <Accessory></Accessory>
          },
          {
            path:'/accessories',
            loader:()=> fetch(`/FakeData/gadgets.json`),
            element: <Accessory></Accessory>
          },
          {
            path:'/smartwatch',
            loader:()=> fetch(`/FakeData/gadgets.json`),
            element: <Smartwatch></Smartwatch>
          },
          {
            path:'/monitor',
            loader:()=> fetch(`/FakeData/gadgets.json`),
            element: <Monitors></Monitors>
          },
          {
            path:'/shortbyprice',
            loader:()=> fetch(`/FakeData/gadgets.json`),
            element: <ShortByPrice></ShortByPrice>
          }
        ])
      },
      {
        path: "/home/:id",
        loader:({params})=> fetch(`/FakeData/gadget${params.id}.json`),
        element: <Details></Details>
      },
      {
        path: "/statistic",
        element: <Statistic></Statistic>
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children:([
          {
            path: "/dashboard",
            loader: ()=>fetch(`/FakeData/gadgets.json`),
            element : <Chart></Chart>
          },
          {
            path: "/dashboard/wishlist",
            loader: ()=>fetch(`/FakeData/gadgets.json`),
            element : <Wishlist></Wishlist>
          }
        ])
      },
      {
        path: "/about",
        element: <About></About>
      }
    ])
    
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer
    position="top-center"
    autoClose={1000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="colored"
    />
  </StrictMode>,
)
