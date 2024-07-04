import { Box, HStack, StackDivider, Text, VStack } from "@chakra-ui/react";
interface Props {
  name: string;
  ingredients: { [key: string]: string };
  description: string;
}

const CaptionDetails = ({ name, ingredients, description }: Props) => {
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
        <Text fontWeight="bold">توضیحات {name} :</Text>

        <Text fontSize="sm">{description}</Text>
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
        <Text fontWeight="bold">مواد اولیه:</Text>
        <VStack
          divider={<StackDivider borderColor="gray.300" overflowY="auto" />}
        >
          {Object.entries(ingredients).map(([key, value]) => (
            <HStack
              key={key}
              justifyContent="space-between"
              w="full"
              fontSize="small"
            >
              <Text>{key}</Text>
              <Text>{value}</Text>
            </HStack>
          ))}
        </VStack>
      </Box>
    </>
  );
};

export default CaptionDetails;
