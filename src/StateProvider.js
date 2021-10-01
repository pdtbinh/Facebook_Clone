import React, { createContext, useContext, useReducer } from 'react'

// Create the context object to track user.
export const StateContext = createContext();

/* 
Create "element" StateProvider. 
By convention, parameter 'children' is the fixed, its name must stay the same.
*/
export const StateProvider = ({reducer, initialState, children}) => 
    (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    );

// Extract current value of the context created above.
export const useStateValue = () => useContext(StateContext);