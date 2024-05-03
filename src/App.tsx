import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import { useColorMode } from "@chakra-ui/react";
import Register from "./pages/Register";
import { EditProfile } from "./pages/EditProfile";
import Home from "./pages/Home";
<<<<<<< HEAD
import { EditProfile } from "./components/EditProfile";
import NewPost from "./pages/NewPost";
=======
>>>>>>> c8a64f7cb7f6dce89325cf982c70a0cef76788ad

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
