import { useContext } from "react";
import Context from "../context/AppContext";

export const useActions = () => {
	const { actions } = useContext(Context);
    return { ...actions }
}