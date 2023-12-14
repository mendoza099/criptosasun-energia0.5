import { useEffect } from "react";
import {  RouterProvider } from "react-router-dom";
import Context from "./context/AppContext";
import injectContext from "./context/AppContext";
// This is where all your routes are located
import { router } from "./routes";
import { useGlobalState } from "./hooks/useGlobalState";

// This component contains your entire application
const Layout = () => {
    const globalState = useGlobalState()

    return (
        <Context.Provider value={globalState}>
            <RouterProvider router={router} />
        </Context.Provider>
    );
};

export default Layout;