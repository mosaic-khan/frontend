import { AccordionButton, HStack, Text } from "@chakra-ui/react";
import {IoTrashBin } from "react-icons/io5";

const DeletePassButton = () => {
  return (
    <AccordionButton dir="rtl" paddingRight="30px" borderRadius="lg">
      <HStack h="80px">
        <IoTrashBin color="gray" size="20px" />
        <Text textAlign="right" color="brand.700" fontWeight="bold" fontSize="xl">
          حذف حساب کاربری
        </Text>
      </HStack>
    </AccordionButton>
  );
};

export default DeletePassButton;