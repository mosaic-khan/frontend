import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import { useColorMode } from "@chakra-ui/react";
import Register from "./pages/Register";
import { EditProfile } from "./pages/EditProfile";
import Home from "./pages/Home";
import NewPost from "./pages/NewPost";
import { ResetPassword } from "./pages/ResetPassword";
import UserProfile from "./pages/UserProfile";
import OtherProfile from "./pages/OtherProfile";

import PostPage from "./pages/PostPage";
import { AuthContext, RefreshToken } from "./api/auth/AuthController";

function App() {
  const { setColorMode } = useColorMode();
  const { token, loggedIn, setToken } = RefreshToken();
  setColorMode("light"); // light dark
  return (
    <AuthContext.Provider
      value={{
        token: token,
        isLoggedIn: loggedIn,
        setToken: setToken,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Landing />} />
            <Route path="Home" element={<Home />} />
            <Route path="Register" element={<Register />} />
            <Route path="EditProfile" element={<EditProfile />} />
            <Route path="NewPost" element={<NewPost />} />
            <Route path="ResetPassword" element={<ResetPassword />} />
            <Route path="MyProfile" element={<UserProfile />} />
            <Route path="OtherProfile" element={<OtherProfile />} />
            <Route path="post/:postId" element={<PostPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
