import { AccordionButton, HStack, Text } from "@chakra-ui/react";
import { PiTrashSimpleBold } from "react-icons/pi";

const DeletePassButton = () => {
  return (
    <AccordionButton dir="rtl" paddingRight="30px" borderRadius="lg">
      <HStack h="80px">
        <PiTrashSimpleBold color="#B10019" size="25px" />
        <Text
          textAlign="right"
          color="brand.700"
          fontWeight="bold"
          fontSize="xl"
        >
          حذف حساب کاربری
        </Text>
      </HStack>
    </AccordionButton>
  );
};

export default DeletePassButton;
