import { Text, TextProps, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import userClient from "../../api/services/user-service";
import { City } from "../../api/clients/user";

interface Props {
  inputText: string;
  onSelect: (id: number, city: string) => void;
}

const textProps: TextProps = {
  w: "100%",
  padding: "10px 20px 6px 20px",
  dir: "rtl",
  userSelect: "none",
};

const CitySuggestion = ({ inputText, onSelect }: Props) => {
  const [suggestions, setSuggestions] = useState<City[]>([]);

  useEffect(() => {
    if (inputText.trim().length == 0) {
      setSuggestions([]);
    } else {
      userClient
        .getCities(
          { cityPattern: inputText.trim() },
          {
            meta: {
              Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
          }
        )
        .then((res) => {
          setSuggestions(res.response.cities);
        })
        .catch((err) => {
          console.log(err);
        });
    }
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
              onSelect(item.id, item.name);
            }}
          >
            {item.name}
          </Text>
        ))
      ) : (
        <Text {...textProps}>...</Text>
      )}
    </VStack>
  );
};

export default CitySuggestion;
