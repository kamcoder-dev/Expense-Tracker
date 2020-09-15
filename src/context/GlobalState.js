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

    function addTime(time) {
        dispatch({
            type: 'ADD_TIME',
            payload: time
        })
    }


    return (
        <GlobalContext.Provider value={{
            times: state.times,
            deleteTime,
            addTime
        }}>
            {children}
        </GlobalContext.Provider>
    )
}