import { Box, Flex, HStack, VStack } from "@chakra-ui/react";
import UserNavigation from "../components/Navigation/ProfileNavigation";
import UserHeader from "../components/header/UserHeader";
import Post from "../components/MyPosts/Post";
const UserProfile = () => {
  return (
    <Box h="100vh" bgColor="gray.100" position="relative" overflowY="auto">
      <Flex position="fixed" w="100%" zIndex="10" bg="white">
        {/* navbar */}
        <UserNavigation isTrue={true} />
      </Flex>
      <Box
        h="full"
        position="relative"
        pt={"5%"}
        pb={"5%"}
        pl={"10%"}
        overflowY="auto"
      >
        <HStack>
          <VStack w="88%" h="full">
            {/* Header */}
            <UserHeader />
            <Post />
          </VStack>
        </HStack>
      </Box>
    </Box>
  );
};

export default UserProfile;
