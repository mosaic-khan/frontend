import { Dispatch, createContext, useEffect, useState } from "react";
import userClient from "../../api/services/user-service";

interface IAuthContext {
  token: string;
  isLoggedIn: boolean;
  setToken: Dispatch<React.SetStateAction<string>>;
}

export const AuthContext = createContext<IAuthContext>({
  token: "",
  isLoggedIn: false,
  setToken: () => {},
});

export const RefreshToken = () => {
  const [token, setToken] = useState<string>("");
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    let timeout = 60000;
    if (!loggedIn) timeout = 0;
    const interval = setTimeout(() => {
      let refreshTokenHeader = `Bearer ${localStorage.getItem("refreshToken")}`;
      console.log(
        "try to refresh auth token. refresh token: ",
        refreshTokenHeader
      );
      userClient
        .refreshToken(
          {},
          {
            meta: {
              Authorization: refreshTokenHeader,
            },
          }
        )
        .then((res) => {
          console.log("refreshToken response: ", res);
          setLoggedIn(true);
          localStorage.setItem("jwt", res.response.token);
          setToken(res.response.token);
        })
        .catch((err) => {
          console.log("refreshToken error: ", err);
          setToken("failed");
        });
    }, timeout);

    return () => clearInterval(interval);
  }, [token]);

  return { token, loggedIn, setToken };
};
