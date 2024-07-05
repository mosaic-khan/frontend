import { Icon } from "@chakra-ui/icons";
import { FaThumbtack } from "react-icons/fa";
interface Props {
  onClick: () => void;
}
const PinIcon = ({ onClick }: Props) => {
  return (
    <Icon
      pos="absolute"
      top="10px"
      left="10px"
      as={FaThumbtack}
      w={6}
      h={6}
      color="white"
      onClick={onClick}
      _hover={{
        cursor: "pointer",
        transform: "scale(1.1)",
        transition: "transform 0.3s ease-in-out",
      }}
    />
  );
};
export default PinIcon;
