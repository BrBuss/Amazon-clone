// data layer setup
import React, { createContext, useContext, useReducer } from "react";

// Prepares the DataLayer
export const StateContext = createContext();

//Provider, wraps the entire app, and provide the datalayer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
// export to use inside of a component
export const useStateValue = () => useContext(StateContext);
