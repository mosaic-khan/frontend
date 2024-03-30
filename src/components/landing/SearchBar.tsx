import { Input, InputGroup, InputRightElement, Circle } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

export const SearchBar = () => {
  return (
    <>
      <InputGroup w="350px">
        <Input
          borderRadius="50px"
          borderColor="gray.500"
          focusBorderColor="brand.200"
          bgColor="white"
          textAlign="right"
        />
        <InputRightElement pointerEvents="none">
          <Circle bgColor="gray.50" size="30px" border="1px">
            <Search2Icon color="gray.600" boxSize="20px" />
          </Circle>
        </InputRightElement>
      </InputGroup>
    </>
  );
};
