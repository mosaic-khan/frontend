import { Box, HStack, VStack } from "@chakra-ui/react";
import OtherHeader from "../components/header/OtherHeader";
import userClient from "../api/services/user-service";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Profile } from "../api/clients/user";
import Post from "../components/MyPosts/Post";
import UserNavigation from "../components/Navigation/ProfileNavigation";

const OtherProfile = () => {
  const [userProfile, setUserProfile] = useState<Profile | undefined>();
  const [thisuserProfile, setThisUserProfile] = useState<Profile | undefined>();
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
        console.log("getProfile response: ", res.response.profile);
        if (res.response.profile) {
          setThisUserProfile(res.response.profile);
        }
      })
      .catch((err) => {
        console.log("getProfile error: ", err);
      });
  }, []);
  return (
    <Box h="100vh" bgColor="gray.100" position="relative">
      <Box position="fixed" w="full" zIndex="10" h="10%">
        {/* navbar */}
        <UserNavigation userProfile={thisuserProfile} isTrue={true} />
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
            <Post
              profileId={userProfile?.id ? userProfile.id : BigInt(1)}
              isCurrentUser={false}
            />
          </VStack>
        </HStack>
      </Box>
    </Box>
  );
};

export default OtherProfile;
