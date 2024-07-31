import React, { createContext, useContext, useState } from 'react'

export const todocontext = createContext(null);
export const dummycontext = createContext(null);

const TodoContext = (props) => {

    const [users, setusers] = useState([])
    
  return (
    <todocontext.Provider value={[users, setusers]}>
            <dummycontext.Provider value="This is Dummy Context Only">
                {props.children}
            </dummycontext.Provider>
    </todocontext.Provider>
  )
}

export default TodoContext