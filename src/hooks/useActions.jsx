import { useState } from 'react'
import { useStore } from './useStore';

const initilActions = {
    exampleFunction: () => {
        getActions().changeColor(0, "green");
    }
}

const useActions = () => {
    const [actions, setActions] = useState(initialActions)

    const {setStore} = useStore()

    return {
        actions
    }
}

export default useActions;