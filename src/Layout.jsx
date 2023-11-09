import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Root/>
        ),
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "single/:theid",
                element: <Single />,
            },
        ],
        errorElement: <h1>Not found!</h1>,
    }
  ]);

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    // const basename = process.env.BASENAME || "";

    return (
        <RouterProvider router={router} />
    );
};

export default Layout;