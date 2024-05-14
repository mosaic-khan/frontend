import { Dispatch, createContext, useEffect, useState } from "react";

interface IAuthContext {
  token: string;
  isLoggedIn: boolean;
  setRefreshToken: Dispatch<React.SetStateAction<string>>;
}

export const TokenContext = createContext<IAuthContext>({
  token: "",
  isLoggedIn: false,
  setRefreshToken: () => {},
});

export const RefreshToken = () => {
  const [token, setToken] = useState<string>("");
  const [refreshToken, setRefreshToken] = useState<string>("");
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const interval = setTimeout(() => {
      setLoggedIn(true);
      console.log("try to refresh auth token. refresh token: ", refreshToken);
      setToken(token);
    }, 1000);

    return () => clearInterval(interval);
  }, [token, refreshToken]);

  return { token, loggedIn, setRefreshToken };
};
