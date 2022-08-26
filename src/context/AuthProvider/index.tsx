import { createContext, useEffect, useState } from "react";
//Types
import { IAuthProvider, IContext, IUser } from "../../types/AuthProvider";

//Functin
import { getUserLocalStorage } from "./util";
import { loginRequest } from "./util";
import { setUserLocalStorage } from "./util";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUser | null>();

  useEffect(() => {
    const user = getUserLocalStorage();

    if (user) {
      setUser(user);
    }
  }, []);

  async function authenticate(email: string, password: string) {
    const response = await loginRequest(email, password);

    const payload = { access_token: response.access_token, email };

    setUser(payload);
    setUserLocalStorage(payload);
  }

  function logout() {
    setUser(null);
    setUserLocalStorage(null);
  }

  return (
    <AuthContext.Provider value={{ ...user, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
