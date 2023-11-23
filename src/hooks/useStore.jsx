import { useState } from "react";
import useActions from "./useActions";

const initialStore = {
    message: null,
    demo: [
        {
            title: "FIRST",
            background: "white",
            initial: "white"
        },
        {
            title: "SECOND",
            background: "white",
            initial: "white"
        }
    ]
};

export const useStore = () => {
    const [store, setStore] = useState(initialStore)
    return { store, setStore }
}