import { SmallCloseIcon } from "@chakra-ui/icons";
import { HStack, IconButton, Text } from "@chakra-ui/react";

interface Props {
  text: string;
  onDelete: (value: string) => void;
}

const IngredientBadge = ({ text, onDelete }: Props) => {
  return (
    <HStack borderRadius="100px" bgGradient="linear(to-r,brand.50,brand.100)">
      <Text marginRight="10px">{text}</Text>
      <IconButton
        h="40px"
        w="40px"
        borderRadius="100px"
        aria-label="back-button"
        icon={<SmallCloseIcon />}
        color="brand.900"
        bg=""
        _hover={{
          color: "brand.600",
          transform: "scale(1.5)",
        }}
        _active={{
          bg: "",
        }}
        onClick={() => onDelete(text)}
      ></IconButton>
    </HStack>
  );
};

export default IngredientBadge;
