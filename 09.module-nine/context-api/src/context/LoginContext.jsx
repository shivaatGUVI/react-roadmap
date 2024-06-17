import { createContext, useState } from "react";

export const LoginContext = createContext();

export default function LoginContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const changeLoginState = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <LoginContext.Provider value={{ isLoggedIn, changeLoginState }}>
      {children}
    </LoginContext.Provider>
  );
}
