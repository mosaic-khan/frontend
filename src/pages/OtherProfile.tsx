import { Box, HStack, VStack } from "@chakra-ui/react";
import UserNavigation from "../components/Navigation/ProfileNavigation";
import OtherHeader from "../components/header/OtherHeader";
import userClient from "../api/services/user-service";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Profile } from "../api/clients/user";
import Post from "../components/MyPosts/Post";

const OtherProfile = () => {
  const [userProfile, setUserProfile] = useState<Profile | undefined>();
  const { username } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    userClient
      .getProfile(
        {
          username: username,
        },
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
  }, []);
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
            <OtherHeader userProfile={userProfile} isLoading={isLoading} />
            <Post profileId={userProfile?.id ? userProfile.id : BigInt(1)} isCurrentUser = {false} />
          </VStack>
        </HStack>
      </Box>
    </Box>
  );
};

export default OtherProfile;
