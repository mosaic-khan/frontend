import { Icon } from "@chakra-ui/icons";
import { useState } from "react";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const HomeIcon = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  return (
    <Icon
      as={isHovered ? AiFillHome : AiOutlineHome}
      boxSize={6}
      color={isHovered ? "brand.800" : "black.100"}
      mr={4}
      onClick={() => navigate("/home")}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      _hover={{
        cursor: "pointer",
        transform: "scale(1.1)",
        transition: "transform 0.3s ease-in-out",
      }}
    />
  );
};

export default HomeIcon;
