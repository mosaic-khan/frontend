import { Button, HStack, VStack } from "@chakra-ui/react";
import SearchFilterHeaders from "./SearchFilterHeaders";
import { useState } from "react";

const SearchType = () => {
  const [type, setType] = useState<number>(0);

  return (
    <VStack w="100%">
      <SearchFilterHeaders>نوع جستوجو</SearchFilterHeaders>
      <HStack w="100%" justifyContent="space-evenly">
        <Button
          variant="ghost"
          color={type == 0 ? "brand.400" : "black"}
          onClick={() => setType(0)}
        >
          کاربر
        </Button>
        <Button
          variant="ghost"
          color={type == 1 ? "brand.400" : "black"}
          onClick={() => setType(1)}
        >
          پست ها
        </Button>
      </HStack>
    </VStack>
  );
};

export default SearchType;
