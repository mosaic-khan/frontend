import { Icon } from "@chakra-ui/icons";
import { useState } from "react";
import { AiOutlineComment } from "react-icons/ai";

interface Props {
  isHoveredColor?: string;
  color?: string;
  boxSize?: number;

  marginRight?:
    | number
    | (string & {})
    | "-moz-initial"
    | "inherit"
    | "initial"
    | "revert"
    | "revert-layer"
    | "unset"
    | "auto"
    | undefined;
}
const CommentsIcon = ({
  marginRight,
  boxSize = 6,
  isHoveredColor = "brand.900",
  color = "black.100",
}: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Icon
      as={AiOutlineComment}
      boxSize={boxSize}
      color={isHovered ? isHoveredColor : color}
      mr={marginRight} //marginright 4 for onepost
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
