import { Avatar, Box, HStack, VStack, Text } from "@chakra-ui/react";
import { FaCrown } from "react-icons/fa";
const bestChefs = [
  { username: "Chef1" },
  { username: "Chef2" },
  { username: "Chef3" },
];

const BestChefs = () => {
  return (
    <Box
      boxSize="250px"
      bgGradient="linear(to-b, white, gray.100)"
      borderRadius="lg"
      shadow="lg"
      borderWidth="1px"
      borderColor="gray.300"
      p={4}
    >
      <HStack mb={4} justifyContent="center">
        <FaCrown color="gold" />
        <Text fontWeight="bold" fontSize="md" textAlign="center">
          آشپزهای برتر
        </Text>
      </HStack>
      <VStack spacing={3}>
        {bestChefs.map((chef) => (
          <HStack
            key={chef.username}
            w="full"
            justifyContent="space-between"
            p={2}
            borderRadius="md"
            bg="gray.50"
            shadow="sm"
          >
            <HStack>
              <Avatar size="sm" />
              <Text fontWeight="bold">{chef.username}</Text>
            </HStack>
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

export default BestChefs;
