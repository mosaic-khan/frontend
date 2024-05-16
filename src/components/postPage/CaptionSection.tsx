import { Box, Text } from "@chakra-ui/react";
interface Props{
  ingredients: { [key: string]: string };
  description: string;
}

const CaptionDetails = ({ingredients, description}:Props) => {
  return (
    <>
      <Box
        w="60%"
        bg="white"
        height="400px"
        borderRadius="xl"
        boxShadow="md"
        overflowY="auto"
        maxHeight="300px"
        p={4}
      >
        توضیحات:
        <Text fontSize="sm">
         {description}
        </Text>
      </Box>
      <Box
        h="full"
        w="40%"
        bg="gray.100"
        borderRadius="xl"
        boxShadow="md"
        overflowY="auto"
        maxHeight="300px"
        p={4}
      >
        مواد اولیه:
        <Text fontSize="sm">
         {ingredients[1]}
        </Text>
      </Box>
    </>
  );
};

export default CaptionDetails;
