import { Icon } from "@chakra-ui/icons";
import { useState } from "react";
import { AiOutlineComment } from "react-icons/ai";


const CommentsIcon = () => {

interface Props {
  isHoveredColor: string;
  color: string;
  boxSize: number;

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
  isHoveredColor,
  color,
  boxSize,
  marginRight,
}: Props) => {

  const [isHovered, setIsHovered] = useState(false);
  return (
    <Icon
      as={AiOutlineComment}

      boxSize={6}
      color={isHovered ? "brand.900" : "black.100"}
      mr={4}

      boxSize={boxSize} //6 default
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

