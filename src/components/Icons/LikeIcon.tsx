import { Icon } from "@chakra-ui/icons";
import { useState } from "react";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
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
const LikeIcon = ({ isHoveredColor, color, boxSize, marginRight }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Icon
      as={isHovered ? IoHeart : IoHeartOutline}
      boxSize={boxSize} //6 default
      color={isHovered ? isHoveredColor : color}
      mr={marginRight ? marginRight : 0} //marginright 4 for onepost
      onClick={() => setIsHovered(!isHovered)}
      _hover={{
        cursor: "pointer",
        transform: "scale(1.1)",
      }}
    />
  );
};
export default LikeIcon;
// "brand.800" : "black.100"
