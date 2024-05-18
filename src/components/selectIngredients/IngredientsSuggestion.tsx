import { Text, TextProps, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import postClient from "../../api/services/post-service";

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
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    postClient
      .suggestIngredient(
        { name: inputText },
        {
          meta: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      )
      .then((res) => {
        console.log("suggestIngredient response: ", res);
        setSuggestions(res.response.ingredients);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [inputText]);

  return (
    <VStack w="100%" textColor="black">
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
            {item}
          </Text>
        ))
      ) : (
        <Text {...textProps}>...</Text>
      )}
    </VStack>
  );
};

export default IngredientsSuggestion;
