import { Icon } from "@chakra-ui/icons";
import { useState } from "react";
import { IoHeart, IoHeartOutline } from "react-icons/io5";

const HeartIcon = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Icon
      as={isHovered ? IoHeart : IoHeartOutline}
      boxSize={6}
      color={isHovered ? "brand.800" : "black.100"}
      mr={4}
      onClick={() => console.log("TODO")}
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
export default HeartIcon;
