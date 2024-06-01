import { HStack, Heading } from "@chakra-ui/react";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";

const LogoWithText = () => {
  const username = localStorage.getItem("username");
  const navigate = useNavigate();
  const handleClick = () => {
    if (username && username.trim() != "") navigate("/home");
    else navigate("/");
  };

  return (
    <HStack>
      <Heading size="lg" onClick={handleClick} cursor="pointer">
        خوان
      </Heading>
      <Logo onClick={handleClick} />
    </HStack>
  );
};

export default LogoWithText;
