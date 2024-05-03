import { Icon } from "@chakra-ui/icons";
import { useState } from "react";
import { IoSettings, IoSettingsOutline } from "react-icons/io5";

const SettingsIcon = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Icon
      as={isHovered ? IoSettings : IoSettingsOutline}
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
export default SettingsIcon;
