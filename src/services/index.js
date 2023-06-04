import React, { useState } from 'react';

export const UserContext = React.createContext();

export const UserProvider = (props) => {
  const [token, setToken] = useState(null);

  return (
    <UserContext.Provider value={[token, setToken]}>
      {props.children}
    </UserContext.Provider>
  );
};
