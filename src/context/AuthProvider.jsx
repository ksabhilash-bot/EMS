import React, { useEffect } from 'react'
import { getLocalStorage } from '../utils/localStorage';
export const AuthContext = React.createContext();
const AuthProvider = ({children}) => {
  const [userData, setUserData] = React.useState(null);
 useEffect(() => {
  getLocalStorage()
   const {employees,admin}=getLocalStorage()
   setUserData({employees,admin})
 }, [])
 

  return (
    <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider 