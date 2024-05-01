import { Text, TextProps, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface Props {
  inputText: string;
  onSelect: (ingredient: string) => void;
}

const textProps: TextProps = {
  w: "100%",
  padding: "10px 20px 6px 20px",
  dir: "rtl",
  userSelect: "none",
};

const IngredientsSuggestion = ({ inputText, onSelect }: Props) => {
  //   const [suggestions, setSuggestions] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>(["a", "b", "c"]);

  useEffect(() => {
    // Send request to back end and set the suggestions
  }, [inputText]);

  return (
    <VStack w="100%">
      {suggestions.length > 0 ? (
        suggestions.map((item, index) => (
          <Text
            key={index}
            {...textProps}
            cursor="pointer"
            _hover={{ bg: "brand.50" }}
            onClick={() => {
              onSelect(item);
            }}
          >
            {inputText} {item}
          </Text>
        ))
      ) : (
        <Text {...textProps}>...</Text>
      )}
    </VStack>
  );
};

export default IngredientsSuggestion;
