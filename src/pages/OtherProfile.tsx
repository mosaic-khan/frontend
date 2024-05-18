import { Box, HStack, VStack } from "@chakra-ui/react";
import OtherHeader from "../components/header/OtherHeader";
import UserNavigation from "../components/Navigation/ProfileNavigation";
// import { useState } from "react";

const OtherProfile = () => {
  // const [username, setUserName] = useState<string>("MakanJavadi");
  // setUserName("MakanJavadi");
  const username = "elham";

  return (
    <Box h="100vh" bgColor="gray.100" position="relative">
      <Box position="fixed" w="full" h="10%">
        {/* navbar */}
        <UserNavigation isTrue={true} />
      </Box>
      <Box h="90%" position="relative" top="10%">
        <HStack>
          {/* sidebar */}
          {/* <UserSideBar /> */}
          <VStack w="85%" h="full">
            {/* Header */}
            <OtherHeader username={username} />
            {/* Latest Box */}
            <Box w="full"></Box>
          </VStack>
        </HStack>
      </Box>
    </Box>
  );
};

export default OtherProfile;
