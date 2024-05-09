import { useState } from "react";
import { Input, Button, VStack, Flex, Box, Heading } from "@chakra-ui/react";

const TagBox = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState<string>("");
  const handleAddTag = (tag: string) => {
    setTags([...tags, tag]);
    setTagInput("");
  };

  const handleRemoveTag = (index: number) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
  };

  function chunk<T>(arr: T[], tagsPerLine: number): T[][] {
    const chunks: T[][] = [];
    for (let i = 0; i < arr.length; i += tagsPerLine) {
      chunks.unshift(arr.slice(i, i + tagsPerLine));
    }
    return chunks;
  }

  const tagsPerLine = 5;
  return (
    <Box width="90%" border="1px solid #ccc" borderRadius="5px">
      <Heading padding="10px" textAlign="right" fontSize="20px">
        اضافه کردن تگ
      </Heading>
      <VStack>
        <Input
          placeholder="تگ جدید را وارد کنید"
          textAlign="right"
          _focusVisible={{
            outline: "none",
          }}
          dir="rtl"
          width="40%"
          value={tagInput}
          onChange={(event) => setTagInput(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleAddTag(tagInput);
            }
          }}
        />

        <Flex direction="column-reverse">
          {chunk(tags, tagsPerLine).map((line, lineIndex) => (
            <Flex key={lineIndex} justifyContent="flex-end">
              {line
                .slice()
                .reverse()
                .map((tag, tagIndex) => (
                  <Button
                    key={tagIndex}
                    bg="brand.500"
                    colorScheme="brand.200"
                    size="sm"
                    marginBottom="4px"
                    onClick={() => handleRemoveTag(lineIndex * tagsPerLine)}
                    marginLeft="4px"
                  >
                    {tag}
                  </Button>
                ))}
            </Flex>
          ))}
        </Flex>
      </VStack>
    </Box>
  );
};

export default TagBox;
