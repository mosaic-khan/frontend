import { Box, HStack, VStack } from "@chakra-ui/react";
import UserNavigation from "../components/Navigation/ProfileNavigation";
import UserHeader from "../components/header/UserHeader";
import UserSideBar from "../components/Navigation/UserSideBar";
import Post from "../components/MyPosts/Post";

const UserProfile = () => {
  return (
    <Box h="100%" bgColor="gray.100" position="relative">
      <Box position="fixed" w="full" h="10%">
        {/* navbar */}
        <UserNavigation />
      </Box>
      <Box h="90%" position="relative" top="10%">
        <HStack>
          {/* sidebar */}
          <UserSideBar />
          <VStack w="85%" h="100%" marginTop="5%">
            {/* Header */}
            <UserHeader />
            <Post></Post>
            {/* Latest Box */}
            <Box w="full"></Box>
          </VStack>
        </HStack>
      </Box>
    </Box>
  );
};

export default UserProfile;
