import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Intial state

const intialState = {
    times: []
}

// Create context

export const GlobalContext = createContext(intialState);


// Provider component

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, intialState);

    //Actions

    function deleteTime(id) {
        dispatch({
            type: 'DELETE_TIME',
            payload: id
        })
    }

    function deleteCost(id) {
        dispatch({
            type: 'DELETE_COST',
            payload: id
        })
    }

    function addTime(time) {
        dispatch({
            type: 'ADD_TIME',
            payload: time
        })
    }

    function addCost(cost) {
        dispatch({
            type: 'ADD_COST',
            payload: cost
        })
    }


    return (
        <GlobalContext.Provider value={{
            times: state.times,
            costs: state.costs,
            deleteTime,
            addTime,
            deleteCost,
            addCost

        }}>
            {children}
        </GlobalContext.Provider>
    )
}