import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from "react";
import { Box, Center, Input, Select, Textarea, HStack } from "@chakra-ui/react";
import postClient from "../../api/services/post-service";

interface Props {
  caption: string;
  setCaption: Dispatch<SetStateAction<string>>;
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
}

interface Category {
  name: string;
}

const CaptionBox = ({ caption, setCaption, title, setTitle }: Props) => {
  const [dropdownValue, setDropdownValue] = useState<string>("");
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    postClient
    .getCategories(
      {},
      {
        meta: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      }
    )
    .then((res) => {
      console.log("Categories response: ", res);
      setCategories(res.response.categories)
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  const handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDropdownValue(event.target.value);
  };
  const handleCaptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setCaption(event.target.value);
  };
  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  return (
    <Box w="40%" h="100%" borderTopRadius="15px" bg="white" boxShadow="lg">
      <Box
        w="100%"
        h="20%"
        bg="gray.200"
        borderTopRadius="15px"
        borderBottom="3px solid white"
        alignContent="center"
        pr={2}
        pos="relative"
      >
        <HStack px={4} h="100%">
          <Input
            borderRadius="full"
            fontWeight="bold"
            w="60%"
            h="70%"
            border="2px solid white"
            placeholder="عنوان پست"
            value={title}
            onChange={handleTitleChange}
          />
          <Select
            fontSize="14px"
            placeholder="دسته‌ بندی"
            value={dropdownValue}
            onChange={handleDropdownChange}
            variant="filled"
            backgroundColor="gray.200"
            _hover={{ borderBottomColor: "brand.800" }}
            _focus={{ borderBottomColor: "gray.600" }}
            borderBottomColor={"gray.500"}
            w="45%"
            h="100%"
            boxShadow="sm"
            paddingRight={3}
          >
            {categories.map(category => (
              <option key={category.name} value={category.name}>{category.name}</option>
            ))}
          </Select>
        </HStack>
      </Box>

      <Box w="100%" h="80%" bg="gray.200" borderBottomRadius="15px">
        <Center w="100%" h="100%" pos="relative">
          <Textarea
            bg="white"
            placeholder="توضیحات غذا:"
            rows={7}
            dir="rtl"
            value={caption}
            onChange={handleCaptionChange}
            w="90%"
            h="90%"
            textColor="black"
            resize="none"
            borderRadius="lg"
            boxShadow="sm"
            _hover={{ boxShadow: "md" }}
            _focus={{ borderColor: "gray.500", boxShadow: "md" }}
          />
        </Center>
      </Box>
    </Box>
  );
};

export default CaptionBox;
