import { Box, HStack, VStack } from "@chakra-ui/react";
import OtherHeader from "../components/header/OtherHeader";
import userClient from "../api/services/user-service";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Profile } from "../api/clients/user";
import Post from "../components/MyPosts/Post";
import { PinedPost } from "../api/clients/post";
import PostApi from "../api/services/post-service";
import UserNavigation from "../components/Navigation/ProfileNavigation";

const OtherProfile = () => {
  const [userProfile, setUserProfile] = useState<Profile | undefined>();
  const [thisuserProfile, setThisUserProfile] = useState<Profile | undefined>();
  const { username } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const [pinnedPosts, setPinnedPosts] = useState<PinedPost[] | null>();
  const [flag, setFlag] = useState("");
  const pinRequest = (postID: bigint) => {
    if (postID) {
      console.log(postID);
      PostApi.pinPost(
        {
          id: postID,
        },
        { meta: { Authorization: `Bearer ${localStorage.getItem("jwt")}` } }
      )
        .then((res) => setFlag(res.status.detail))
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
        .then((res) => setFlag(res.status.detail))
        .catch((err) => console.error(err));
    } else console.log("missing");
  };

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
              pinnedPosts={pinnedPosts ? pinnedPosts : null}
              pinRequest={pinRequest}
            />
          </VStack>
        </HStack>
      </Box>
    </Box>
  );
};

export default OtherProfile;
