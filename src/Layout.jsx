import {  RouterProvider } from "react-router-dom";
import Context from "./context/_AppContext";
import injectContext from "./context/AppContext";
import { router } from "./routes";
import { useStore } from "./hooks/useStore";

//This component contains your entire application
const Layout = () => {
    const store = useStore();

    return (
        <Context.Provider value={store}>
            <RouterProvider router={router} />
        </Context.Provider>
    );
};

export default injectContext(Layout);