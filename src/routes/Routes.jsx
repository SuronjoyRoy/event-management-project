import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import About from "../pages/About";
import Service from "../pages/Service";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Card from "../pages/Card";
import PrivateRoute from "./PrivateRoute";
import CardShow from "../pages/CardShow";


const routes = createBrowserRouter([
    {
       path:'/',
       element:<Root></Root>,
       children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('/data.json')
        },
        {
            path:'/card/:id',
            element:<PrivateRoute><Card></Card></PrivateRoute>
        },
        {
            path:'/about',
            element:<About></About>
        },
        {
            path:'/service',
            element:<Service></Service>
        },
        {
            path:'/contact',
            element:<Contact></Contact>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        }, 
        {
            path:'/cards/:id',
            element:<PrivateRoute><CardShow></CardShow></PrivateRoute>,
            loader:()=>fetch('/data.json')
        }    
    ]
    }
])

export default routes;