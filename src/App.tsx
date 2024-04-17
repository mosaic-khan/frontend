import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import { useColorMode } from "@chakra-ui/react";
import Register from "./pages/Register";
import Home from "./pages/Home";
<<<<<<< HEAD
=======
import { EditProfile } from "./components/EditProfile";
>>>>>>> d0680861d3ea20b7d88972016a40985d58ecd087

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
