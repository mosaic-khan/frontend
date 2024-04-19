import { Input, InputGroup, InputRightElement, Circle } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

interface Props {
  width: string;
}

export const SearchBar = ({ width }: Props) => {
  return (
    <>
      <InputGroup w={width}>
        <Input
          size="lg"
          borderRadius="50px"
          borderColor="gray.500"
          focusBorderColor="brand.200"
          bgColor="white"
          textAlign="right"
          placeholder="غذای مورد نظر را وارد کنید"
        />
        <InputRightElement pointerEvents="none">
          <Circle
            marginTop="8px"
            marginRight="10px"
            bgColor="brand.500"
            size="40px"
          >
            <Search2Icon color="white" boxSize="20px" />
          </Circle>
        </InputRightElement>
      </InputGroup>
    </>
  );
};
