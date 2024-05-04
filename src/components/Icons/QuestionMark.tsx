import { Icon } from "@chakra-ui/icons";
import { useState } from "react";
import { BsQuestionCircle } from "react-icons/bs";

const QuestionIcon = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Icon
      as={BsQuestionCircle}
      boxSize={6}
      color={isHovered ? "brand.800" : "black.800"}
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
export default QuestionIcon;
