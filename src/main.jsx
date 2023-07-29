import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider,} from "react-router-dom"
import {Login} from "./pages/login";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/style.scss"
import {Dashboard} from "./pages/Dashboard";
import {Home} from "./pages/Home";
import {GeneralContextProvider} from "./providerContext/GeneralContextProvider.jsx";
import {TestList} from "./pages/TestList";
import {UsersList} from "./pages/UsersList";
import {CreateTest} from "./pages/CreateTest/index.jsx";


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
                path: "test/list",
                element: <TestList/>,
            },
            {
                path: "test/create",
                element: <CreateTest/>,
            },
            {
                path: "/list_users",
                element: <UsersList/>,
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
        <GeneralContextProvider>
            <RouterProvider router={router}/>
        </GeneralContextProvider>
    </React.StrictMode>,
)
