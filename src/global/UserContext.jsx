import React, { createContext } from 'react'

export const context = createContext()

const UserContext = ({children}) => {
  const defaultValue = {
    
  }

    return <context.Provider value={defaultValue}>{children}</context.Provider>
}

export default UserContext
