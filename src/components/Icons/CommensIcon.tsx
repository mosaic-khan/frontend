import { Icon } from "@chakra-ui/icons";
import { useState } from "react";
import { AiOutlineComment } from "react-icons/ai";

const CommentsIcon = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Icon
      as={AiOutlineComment}
      boxSize={6}
      color={isHovered ? "brand.900" : "black.100"}
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
export default CommentsIcon;
