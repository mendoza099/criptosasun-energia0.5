import { useEffect, useState } from 'react';
import { globalState } from '../context/globalState';

export const useGlobalState = () => {
    const [state, setState] = useState(globalState({
        getStore: () => state.store,
        getActions: () => state.actions,
        setStore: updatedStore =>
            setState({
                store: {
                    ...state.store,
                    ...updatedStore
                },
                actions: state.actions,
            })
    }));

    return state;
};