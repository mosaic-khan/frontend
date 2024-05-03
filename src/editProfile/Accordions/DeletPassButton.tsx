import { AccordionButton, HStack, Text } from "@chakra-ui/react";
import { PiTrashSimpleBold } from "react-icons/pi";
import { useState } from "react";

const DeletePassButton = () => {
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
          <PiTrashSimpleBold color="#B10019" size="25px" />
        ) : (
          <PiTrashSimpleBold color="#B10019" size="25px" />
        )}
        <Text textAlign="right" color="gray.600" fontSize="2xl">
          حذف حساب کاربری
        </Text>
      </HStack>
    </AccordionButton>
  );
};

export default DeletePassButton;
