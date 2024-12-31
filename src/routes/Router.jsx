import { createBrowserRouter } from "react-router-dom";
import App from "../layouts/App";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <h3>Error</h3>,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    }
])

export default router