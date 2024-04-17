import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import { useColorMode } from "@chakra-ui/react";
import Register from "./pages/Register";
<<<<<<< HEAD
import Home from "./pages/Home";
=======
import { EditProfile } from "./components/EditProfile";
>>>>>>> cd57ed8a69d8540e3bffbc4b896f1ff8abf9cad8

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
          <Route path="EditProfile" element={<EditProfile/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
