import {  RouterProvider } from "react-router-dom";
import injectContext from "./context/AppContext";
import { router } from "./routes";

//This component contains your entire application
const Layout = () => {
    return (
        <RouterProvider router={router} />
    );
};

export default injectContext(Layout);