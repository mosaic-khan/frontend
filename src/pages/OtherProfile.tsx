import { Box, HStack, VStack } from "@chakra-ui/react";
import UserNavigation from "../components/navigation/ProfileNavigation";
import UserSideBar from "../components/navigation/UserSideBar";
import OtherHeader from "../components/header/OtherHeader";

const OtherProfile = () => {
  return (
    <Box h="100vh" bgColor="gray.100" position="relative">
      <Box position="fixed" w="full" h="10%">
        {/* navbar */}
        <UserNavigation />
      </Box>
      <Box h="90%" position="relative" top="10%">
        <HStack>
          {/* sidebar */}
          <UserSideBar />
          <VStack w="85%" h="full">
            {/* Header */}
            <OtherHeader />
            {/* Latest Box */}
            <Box w="full"></Box>
          </VStack>
        </HStack>
      </Box>
    </Box>
  );
};

export default OtherProfile;
