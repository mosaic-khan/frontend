import { Input, InputGroup, InputRightElement, Circle } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
export const SearchBar = () => {
  return (
    <>
      <InputGroup
        //size="sm"
        paddingLeft="800px"
        paddingRight="50px"
        paddingTop="10px"
      >
        <Input
          borderRadius="15px"
          border="1px solid #949494"
          bgColor="white"
          textAlign="right"
        />
        <InputRightElement
          pointerEvents="none"
          marginTop="10px"
          marginRight="50px"
        >
          <Circle bgColor="#F8F6F6" size="30px" border="1px solid #949494">
            <Search2Icon color="gray.600" boxSize="20px" />
          </Circle>
        </InputRightElement>
      </InputGroup>
    </>
  );
};
