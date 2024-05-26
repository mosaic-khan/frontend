import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface Props {
  width: string;
}

export const SearchBar = ({ width }: Props) => {
  const navigate = useNavigate();
  const { searchTextParam } = useParams();
  const [text, setText] = useState<string>();

  useEffect(() => {
    setText(searchTextParam);
  }, [searchTextParam]);

  const handleOnChange = (text: string) => {
    setText(text);
  };

  const handleSearchSubmit = () => {
    console.log("search button clicked!");
    if (text && text.trim() != "") navigate("/search/" + text);
    else navigate("/search");
  };

  return (
    <>
      <InputGroup w={width}>
        <Input
          value={text}
          size="lg"
          borderRadius="50px"
          borderColor="gray.500"
          focusBorderColor="brand.200"
          bgColor="white"
          textAlign="right"
          placeholder="غذای مورد نظر را وارد کنید"
          onChange={(e) => handleOnChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key == "Enter") handleSearchSubmit();
          }}
        />
        <InputRightElement pointerEvents="all">
          <Button
            marginTop="8px"
            marginRight="10px"
            bgColor="brand.500"
            w="40px"
            h="40px"
            borderRadius="20px"
            _hover={{ bgColor: "brand.300" }}
            onClick={handleSearchSubmit}
          >
            <Search2Icon color="white" boxSize="20px" />
          </Button>
        </InputRightElement>
      </InputGroup>
    </>
  );
};
