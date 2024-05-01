import { HStack, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const textMargin = "5px 15px 5px 15px";

interface Props {
  onChange: (ingredients: string[][]) => void;
}

const IngredientsTable = () => {
  const [ingredients, setIngredients] = useState<string[][]>([]);

  useEffect(() => {
    console.log(ingredients);
  }, [ingredients]);

  return (
    <VStack
      w="100%"
      padding="20px"
      borderRadius="20px"
      borderWidth="2px"
      borderColor="brand.100"
    >
      <HStack
        w="100%"
        justifyContent="space-between"
        padding="5px 0px 5px 0px"
        borderRadius="20px"
        bgGradient="linear(to-l, brand.600,brand.400)"
        textColor="white"
      >
        <Text margin={textMargin}>مقدار مورد نیاز</Text>{" "}
        <Text margin={textMargin}>مواد اولیه</Text>
      </HStack>
      {[1, 2, 3, 4, 5, 6].map((num, index: number) => (
        <HStack
          w="100%"
          justifyContent="space-between"
          borderRadius="10px"
          bg={index % 2 === 1 ? "brand.50" : ""}
        >
          <Text margin={textMargin}>مقدار ماده {num}</Text>{" "}
          <Text margin={textMargin}>ماده {num}</Text>
        </HStack>
      ))}
    </VStack>
  );
};

export default IngredientsTable;
