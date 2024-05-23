import { Box, HStack, VStack } from "@chakra-ui/react";
import UserNavigation from "../components/Navigation/ProfileNavigation";
import OtherHeader from "../components/header/OtherHeader";
import Post from "../components/MyPosts/Post";

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
      <Box
        h="full"
        position="relative"
        pt={"5%"}
        pb={"5%"}
        pl={"10%"}
        overflowY="auto"
      >
        <HStack>
          {/* sidebar */}
          {/* <UserSideBar /> */}
          <VStack w="88%" h="full">
            {/* Header */}
            <OtherHeader username={username} />
            <Post/>
          </VStack>
        </HStack>
      </Box>
    </Box>
  );
};

export default OtherProfile;
