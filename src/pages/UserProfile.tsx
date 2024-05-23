import { Box, Flex, HStack, VStack } from "@chakra-ui/react";
import UserNavigation from "../components/Navigation/ProfileNavigation";
import UserHeader from "../components/header/UserHeader";
import Post from "../components/MyPosts/Post";
import { useEffect, useState } from "react";
import { Profile } from "../api/clients/user";
import userClient from "../api/services/user-service";

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState<Profile | undefined>();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    userClient
      .getProfile(
        {},
        {
          meta: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      )
      .then((res) => {
        if (res.response.profile) {
          setUserProfile(res.response.profile);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log("getProfile error: ", err);
        setIsLoading(true);
      });
  });
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
            <UserHeader userProfile={userProfile} isLoading={isLoading}/>
            <Post profileId={userProfile?.id ? userProfile.id : BigInt(1)}/>
          </VStack>
        </HStack>
      </Box>
    </Box>
  );
};

export default UserProfile;
