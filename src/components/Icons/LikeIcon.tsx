import { Icon } from "@chakra-ui/icons";
import { useState } from "react";
import { IoHeart, IoHeartOutline } from "react-icons/io5";

const LikeIcon = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Icon
      as={isHovered ? IoHeart : IoHeartOutline}
      boxSize={6}
      color={isHovered ? "brand.800" : "black.100"}
      mr={4}
      onClick={() => setIsHovered(!isHovered)}
      _hover={{
        cursor: "pointer",
        transform: "scale(1.1)",
      }}
    />
  );
};
export default LikeIcon;
