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

function App() {
  const { setColorMode } = useColorMode();
  setColorMode("light"); // light dark
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Landing />} />
          <Route path="Home" element={<Home />} />
          <Route path="Register" element={<Register />} />
          <Route path="EditProfile" element={<EditProfile />} />
          <Route path="NewPost" element={<NewPost />} />
          <Route path="ResetPassword" element={<ResetPassword/>}/>  
          <Route path="MyProfile" element={<UserProfile/>}/>
          <Route path="OtherProfile" element={<OtherProfile/>}/> 
          <Route path="Post/:profileId/:postId" element={<PostPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
