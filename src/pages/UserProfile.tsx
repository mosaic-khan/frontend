import { Box, Flex, HStack, VStack } from "@chakra-ui/react";
import UserNavigation from "../components/Navigation/ProfileNavigation";
import UserHeader from "../components/header/UserHeader";
import Post from "../components/MyPosts/Post";
import userClient from "../api/services/user-service";
import { useEffect, useState } from "react";
import { Profile } from "../api/clients/user";
import { PinedPost } from "../api/clients/post";
import PostApi from "../api/services/post-service";
const UserProfile = () => {
  const [userProfile, setUserProfile] = useState<Profile | undefined>();
  const [isLoading, setIsLoading] = useState(true);
  const [pinnedPosts, setPinnedPosts] = useState<PinedPost[] | null>();
  const [flag, setFlag] = useState();
  const pinRequest = (postID: bigint) => {
    if (postID) {
      console.log(postID);
      PostApi.pinPost(
        {
          id: postID,
        },
        { meta: { Authorization: `Bearer ${localStorage.getItem("jwt")}` } }
      )
        .then((res) => setFlag(res))
        .catch((err) => console.error(err));
    } else console.log("missing");
  };

  const unpinRequest = (postID: bigint) => {
    if (postID) {
      console.log(postID);
      PostApi.unpinPost(
        {
          id: postID,
        },
        { meta: { Authorization: `Bearer ${localStorage.getItem("jwt")}` } }
      )
        .then((res) => setFlag(res))
        .catch((err) => console.error(err));
    } else console.log("missing");
  };

  useEffect(() => {
    setIsLoading(true);
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
    if (userProfile) {
      PostApi.getPins(
        {
          profileID: userProfile?.id,
        },
        { meta: { Authorization: `Bearer ${localStorage.getItem("jwt")}` } }
      )
        .then((res) => {
          setPinnedPosts(res.response.pinedPost);
          console.log("----", res.response.pinedPost);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [userProfile?.id, flag]);
  return (
    <Box h="100vh" bgColor="gray.100" position="relative" overflowY="auto">
      <Flex position="fixed" w="100%" zIndex="10" bg="white">
        {/* navbar */}
        <UserNavigation userProfile={userProfile} isTrue={true} />
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
            <UserHeader
              userProfile={userProfile}
              isLoading={isLoading}
              pinnedPosts={pinnedPosts ? pinnedPosts : null}
              unpinRequest={unpinRequest}
            />
            <Post
              profileId={userProfile?.id ? userProfile.id : BigInt(1)}
              isCurrentUser={true}
              pinnedPosts={pinnedPosts ? pinnedPosts : null}
              pinRequest={pinRequest}
            <UserHeader userProfile={userProfile} isLoading={isLoading} />
            <Post
              profileId={userProfile?.id ? userProfile.id : BigInt(1)}
              isCurrentUser={true}
            />
          </VStack>
        </HStack>
      </Box>
    </Box>
  );
};

export default UserProfile;
