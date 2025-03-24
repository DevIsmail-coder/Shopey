import React, { createContext, useContext, useState } from 'react'

 const context = createContext()

 export const useUser = () => {
  return useContext(context)
 }

const url = "https://express-buy.onrender.com/api/v1"

const UserContext = ({children}) => {



  const defaultValue = {
  }

    return <context.Provider value={defaultValue}>{children}</context.Provider>
}

export default UserContext
