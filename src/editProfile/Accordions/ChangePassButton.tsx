import { AccordionButton, HStack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { BiLockAlt, BiLockOpenAlt } from "react-icons/bi";

const ChangePassButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <AccordionButton
      dir="rtl"
      paddingRight="30px"
      borderRadius="lg"
      onClick={() => setIsOpen(!isOpen)}
    >
      <HStack h="80px">
        {isOpen ? (
          <BiLockOpenAlt color="gray" size="25px" />
        ) : (
          <BiLockAlt color="gray" size="25px" />
        )}
        <Text textAlign="right" color="gray.600" fontSize="2xl">
          تغییر رمز عبور
        </Text>
      </HStack>
    </AccordionButton>
  );
};

export default ChangePassButton;
