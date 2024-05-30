import { Avatar, Box, Center, HStack, Stack, Text } from "@chakra-ui/react";
import UserNavigation from "../components/Navigation/ProfileNavigation";
import ExplorePost from "../components/Explore/ExplorePost";
import { GradientRedButton } from "../components/Buttons";

const TimeLine = () => {
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
    <>
      <Box h="100vh" bgColor="gray.100" position="relative">
        <Box position="fixed" w="full" h="10%">
          {/* navbar */}
          <UserNavigation isTrue={true} />
        </Box>

        <Center h="full" overflowY="auto" justifyContent="space-evenly">
          <Box w="250px" h="md" bg="blue">
            sdjkflskjfd
          </Box>
          <ExplorePost
            username="sodjf"
            userImage="sjlkdf"
            postImage="src/assets/1.jpg"
            likes={10}
            caption="سلام من این متن را برای تست کپشن نوشتم و قرار بود بیشتر از 50 کلمه باشه تا ببینیم چی میشه سلام سلام سلام"
            isLiked={true}
          ></ExplorePost>
          <Box
            w="250px"
            h="500px"
            bg={"gray.50"}
            borderRadius="lg"
            shadow="md"
            borderWidth="1px"
            borderColor="gray.200"
          >
            <Stack spacing={5}>
              <Center mt={5} textColor="gray.500">
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
        </Center>
      </Box>
    </>
  );
};

export default TimeLine;
