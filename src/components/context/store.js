import React, { createContext, useReducer } from "react";
import Reducer from "./reducer";

const initialState = {
  user_data: {
    text: false,
    date: false,
    textarea: false,
    select: false,
    number: false,
    is_create: false,
  },
};
const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export const Context = createContext(initialState);

export default Store;
