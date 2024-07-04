import { Box, Center, Flex, VStack } from "@chakra-ui/react";
import UserNavigation from "../components/Navigation/ProfileNavigation";
import ExplorePost from "../components/TimeLine/ExplorePost";
import ProfileDetails from "../components/TimeLine/ProfileDetails";
import BestChefs from "../components/TimeLine/BestChefs";
import FollowSuggestions from "../components/TimeLine/FollowSuggestions";

const TimeLine = () => {
  return (
    <>
      <Box h="100vh" bgColor="gray.100" position="relative"  overflow="auto">
        <Box position="fixed" w="full" h="10%" zIndex={10} >
          {/* navbar */}
          <UserNavigation isTrue={true} />
        </Box>

        <Center h="100vh" overflowY="auto" justifyContent="space-evenly" mb={10}>
          {/* sideBar */}
          <VStack spacing={10} mt="15%" h="full">
            <ProfileDetails />
            <BestChefs />
          </VStack>
          {/* PostSection */}
          <VStack spacing={10} h="full" mt="15%">
            <ExplorePost
              username="someBody"
              userImage="sjlkdf"
              postImage="src/assets/1.jpg"
              likes={10}
              caption="سلام من این متن را برای تست کپشن نوشتم و قرار بود بیشتر از 50 کلمه باشه تا ببینیم چی میشه سلام سلام سلام"
              isLiked={true}
            ></ExplorePost>
            <ExplorePost
              username="someBody"
              userImage="sjlkdf"
              postImage="src/assets/1.jpg"
              likes={10}
              caption="سلام من این متن را برای تست کپشن نوشتم و قرار بود بیشتر از 50 کلمه باشه تا ببینیم چی میشه سلام سلام سلام"
              isLiked={true}
            ></ExplorePost>
            
          </VStack>
          {/* sideBar */}
          <Flex h="full" mt="15%">
            <FollowSuggestions />
          </Flex>
        </Center>
      </Box>
    </>
  );
};

export default TimeLine;
