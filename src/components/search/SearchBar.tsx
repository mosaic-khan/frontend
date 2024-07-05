import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface Props {
  width: string;
}

export const SearchBar = ({ width }: Props) => {
  const location = useLocation();
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
    let path = "/search";
    if (text && text.trim() != "") path = "/search/" + text;
    const searchParams = new URLSearchParams(location.search);
    const newUrl = `${path}?${searchParams.toString()}`;
    navigate(newUrl);
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
