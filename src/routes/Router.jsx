import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../layouts/App";
import Home from "../pages/home/Home";
import Auth from "../layouts/Auth";
import Login from "../pages/auth/Login/Login";
import Register from "../pages/auth/Register/Register";
import Menu from "../pages/menu/Menu";
import Shop from "../pages/shop/Shop";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <h3>Error</h3>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/our-shop',
                element: <Shop />
            },
            {
                path: '/our-menu',
                element: <Menu />
            }
        ]
    },
    {
        path: '/auth',
        element: <Auth />,
        errorElement: <h3>Error</h3>,
        children: [
            {
                path: '/auth',
                element: <Navigate to='/auth/login' />
            },
            {
                path: '/auth/login',
                element: <Login />
            },
            {
                path: '/auth/register',
                element: <Register />
            },
        ]
    },

])

export default router