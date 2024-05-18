import { useState } from "react";
import {
  VStack,
  Input,
  Tag,
  TagCloseButton,
  Wrap,
  WrapItem,
  Heading,
  Box,
} from "@chakra-ui/react";
//
const STagBox = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");

  const handleAddTag = () => {
    if (tagInput.trim() !== "") {
      setTags([tagInput.trim(), ...tags]); // Unshift new tag to the beginning
      setTagInput("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    const updatedTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(updatedTags);
  };

  return (
    <Box width="90%" border="1px solid #ccc" borderRadius="5px">
      <Heading padding="10px" textAlign="right" fontSize="20px" color="white">
        اضافه کردن تگ
      </Heading>
      <VStack>
        <Input
          placeholder="تگ را وارد کنید"
          _placeholder={{ color: "white" }}
          textColor="white"
          value={tagInput}
          dir="rtl"
          width="40%"
          onChange={(e) => setTagInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAddTag();
            }
          }}
        />
        <Wrap>
          {tags.map((tag, index) => (
            <WrapItem key={index}>
              <Tag
                size="md"
                borderRadius="full"
                color="white"
                bg="brand.500"
                mr={2}
              >
                {tag}
                <TagCloseButton onClick={() => handleRemoveTag(tag)} />
              </Tag>
            </WrapItem>
          ))}
        </Wrap>
      </VStack>
    </Box>
  );
};

export default STagBox;
