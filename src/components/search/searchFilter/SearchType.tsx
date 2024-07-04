import { Button, HStack, VStack } from "@chakra-ui/react";
import SearchFilterHeaders from "./SearchFilterHeaders";

interface Props {
  type: number;
  onTypeChange: (int: number) => void;
}

const SearchType = ({ type, onTypeChange }: Props) => {
  return (
    <VStack w="100%">
      <SearchFilterHeaders>نوع جستوجو</SearchFilterHeaders>
      <HStack w="100%" justifyContent="space-evenly">
        <Button
          variant="ghost"
          color={type == 0 ? "brand.400" : "black"}
          onClick={() => onTypeChange(0)}
        >
          کاربر
        </Button>
        <Button
          variant="ghost"
          color={type == 1 ? "brand.400" : "black"}
          onClick={() => onTypeChange(1)}
        >
          پست ها
        </Button>
      </HStack>
    </VStack>
  );
};

export default SearchType;
