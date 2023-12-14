import { useContext } from "react";
import Context from "../context/AppContext";

export const useActions = () => {
	const { store } = useContext(Context);
    return { store }
}