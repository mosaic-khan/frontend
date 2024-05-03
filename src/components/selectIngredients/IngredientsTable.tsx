import { HStack, Text, VStack } from "@chakra-ui/react";

interface Props {
  ingredients: string[][];
}

const textMargin = "5px 15px 5px 15px";

const IngredientsTable = ({ ingredients }: Props) => {
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
        bgGradient="linear(to-l, brand.600,brand.300)"
        textColor="white"
      >
        <Text margin={textMargin}>مقدار مورد نیاز</Text>{" "}
        <Text margin={textMargin}>مواد اولیه</Text>
      </HStack>
      {ingredients.map((item, index: number) => (
        <HStack
          w="100%"
          justifyContent="space-between"
          borderRadius="10px"
          bg={index % 2 === 1 ? "brand.50" : ""}
        >
          <Text margin={textMargin} dir="rtl">
            {item[1]}
          </Text>
          <Text margin={textMargin} dir="rtl">
            {item[0]}
          </Text>
        </HStack>
      ))}
    </VStack>
  );
};

export default IngredientsTable;
