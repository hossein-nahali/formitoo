import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider,} from "react-router-dom"
import {Login} from "./pages/login";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/style.scss"
import {Dashboard} from "./pages/Dashboard";
import {Home} from "./pages/Home";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard/>,
        children: [
            {
                path: "/home",
                element: <Home/>,
            },
            {
                path: "/list_test",
                element: <div>list test</div>,
            },
            {
                path: "/create_test",
                element: <div>list test</div>,
            },
            {
                path: "/list_users",
                element: <div>users list</div>,
            },
        ]
    },
    {
        path: "/login",
        element: <Login/>,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
