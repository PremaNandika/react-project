import React, { useState, useContext, useEffect } from 'react';

export const UserContext = React.createContext()

export const useCurrentUser = () => {
  return useContext(UserContext).currentUser
}

export const currentUserProvider = ({ children }) => {
  const [ currentUser, setCurrentUser ] = useState(null)

  useEffect(() => {

  },[])
}
