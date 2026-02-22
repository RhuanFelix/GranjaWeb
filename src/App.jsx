import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./views/Home";
import Galpoes from "./views/Galpoes";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path:"/galpoes",
                element: <Galpoes/>
            }
        ]
    }
]);

export default router;