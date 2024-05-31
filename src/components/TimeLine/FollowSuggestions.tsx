import { Stack, Center, HStack, Avatar, Text, Box } from "@chakra-ui/react";
import { GradientRedButton } from "../Buttons";

function FollowSuggestions() {
  const suggestedAccounts = [
    { username: "elham", isFollowing: false },
    { username: "makan", isFollowing: false },
    { username: "ali", isFollowing: true },
    { username: "Mahdi", isFollowing: true },
    { username: "Mamad", isFollowing: true },
    { username: "Parsa", isFollowing: true },
  ];

  const handleFollow = (username: string) => {
    console.log("Followed", username);
  };
  return (
    <Box
      w="250px"
      h="550px"
      bgGradient="linear(to-b, white, gray.100)"
      borderRadius="lg"
      shadow="lg"
      borderWidth="1px"
      borderColor="gray.300"
    >
      <Stack spacing={5}>
        <Center mt={4} textColor="gray.500">
          پیشنهاد برای شما
        </Center>
        {suggestedAccounts.map((account) => (
          <HStack
            key={account.username}
            px={5}
            py={1}
            borderBottomWidth="1px"
            borderBottomColor="white"
            justifyContent="space-between"
            fontWeight="bold"
            fontSize={"sm"}
          >
            <HStack>
              <Avatar size="sm" />
              <Text>{account.username}</Text>
            </HStack>
            <GradientRedButton
              w="60px"
              h="40px"
              onClick={() => handleFollow(account.username)}
              fontSize="sm"
              borderRadius="xl"
              textColor="white"
            >
              {account.isFollowing ? "حذف" : "دنبال"}
            </GradientRedButton>
          </HStack>
        ))}
      </Stack>
    </Box>
  );
}

export default FollowSuggestions;
