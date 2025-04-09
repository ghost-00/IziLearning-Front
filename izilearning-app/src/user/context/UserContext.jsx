import { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ ...otherProps }) => {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {otherProps.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
