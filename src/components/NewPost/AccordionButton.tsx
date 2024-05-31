import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { AccordionButton, HStack, Text } from "@chakra-ui/react";
import { useState } from "react";

const ChangePassButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <AccordionButton
      dir="rtl"
      overflow="hidden"
      borderTopRadius="lg"
      paddingRight={10}
      onClick={() => setIsOpen(!isOpen)}
      h="100%"
      w="100%"
      pos="relative"
    >
      <HStack h="80px">
        {isOpen ? <MinusIcon color="gray" /> : <AddIcon color="gray" />}
        <Text textAlign="right" color="gray.600" fontSize="2xl" pr={2}>
          افزودن عکس
        </Text>
      </HStack>
    </AccordionButton>
  );
};

export default ChangePassButton;
