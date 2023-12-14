import { useContext } from "react";
import Context from "../context/AppContext";

export const useStore = () => {
	const { store } = useContext(Context);
    return { store }
}