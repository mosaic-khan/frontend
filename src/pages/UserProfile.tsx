import { Box, Flex, HStack, VStack } from "@chakra-ui/react";
import UserNavigation from "../components/Navigation/ProfileNavigation";
import UserHeader from "../components/header/UserHeader";
import UserSideBar from "../components/Navigation/UserSideBar";
import Post from "../components/MyPosts/Post";

const UserProfile = () => {
  return (
    <Box bgSize="contain" bgColor="gray.100" position="relative">
      <Flex position="fixed" w="100%" zIndex="10" bg="white">
        {/* navbar */}
        <UserNavigation isTrue={true} />
      </Flex>
      <Box h="90%" position="relative" paddingTop={10}>
        <HStack>
          {/* sidebar */}
          <UserSideBar />
          <VStack w="85%" h="full">
            {/* Header */}
            <UserHeader />
            <Post />
            {/* Latest Box */}
            <Box w="full"></Box>
          </VStack>
        </HStack>
      </Box>
    </Box>
  );
};

export default UserProfile;
