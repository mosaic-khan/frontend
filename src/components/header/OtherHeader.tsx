import { Box, HStack, Avatar, VStack, Heading, Text } from "@chakra-ui/react";
import { GradientRedButton } from "../Buttons";
import { useEffect, useState } from "react";
import userClient from "../../api/services/user-service";

interface Props {
  username: string;
}
type Profile = {
  id: bigint;
  name: string;
  username: string;
  pronouns: string;
  bio: string;
  city: string;
  profilePicUrl: string;
  followerCnt: bigint;
  followingCnt: bigint;
  isFollowed: boolean;
};
const OtherHeader = ({ username }: Props) => {
  const [userProfile, setUserProfile] = useState<Profile>();

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
        // console.log("getProfile response: ", res.response.profile);
        if (res.response.profile) {
          setUserProfile(res.response.profile);
        }
      });
  });

  const onClick = (isFollowed: boolean) => {
    if (isFollowed) {
      console.log("unfollow");
      userClient
        .unfollow(
          {
            profileID: userProfile?.id ? userProfile?.id : BigInt(1),
          },
          {
            meta: {
              Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
          }
        )
        .then((res) => {
          console.log("Unfollow response: ", res.response);
        });
    } else {
      console.log("follow");
      userClient
        .follow(
          {
            profileID: userProfile?.id ? userProfile?.id : BigInt(1),
          },
          {
            meta: {
              Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
          }
        )
        .then((res) => {
          console.log("follow response: ", res.response);
        });
    }
  };

  return (
    <HStack
      bg="white"
      w="85%"
      boxShadow="md"
      borderRadius="lg"
      marginTop="50px"
      padding={1}
    >
      <Avatar
        margin="50px"
        boxSize="150px"
        name={userProfile?.username}
        bgColor="brand.400"
        src={"http://back.khanmedia.ir:9290" + userProfile?.profilePicUrl}
        boxShadow="md"
      />
      <HStack alignItems="start" spacing={"100px"}>
        <VStack dir="rtl" spacing="20px">
          <HStack spacing="40px">
            <Heading fontWeight="bold" dir="rtl">
              {userProfile?.username}
            </Heading>
            <GradientRedButton
              width="90px"
              height="30px"
              color="white"
              fontSize="sm"
              borderRadius="20px"
              onClick={() =>
                onClick(
                  userProfile?.isFollowed ? userProfile?.isFollowed : false
                )
              }
            >
              {/* دنبال کردن */}
              {userProfile?.isFollowed ? "حذف" : "دنبال کردن "}
            </GradientRedButton>
          </HStack>
          <HStack spacing={5} fontSize="sm">
            <Text>{userProfile?.followerCnt.toString()} دنبال کننده</Text>
            <Text>{userProfile?.followingCnt.toString()} دنبال شونده</Text>
          </HStack>
          <Text color="gray.500">{userProfile?.bio}</Text>
          <Text fontSize="sm" color="gray.300">
            {userProfile?.city}
          </Text>
        </VStack>
        <HStack margin={5}>
          <Box boxSize={"100px"} bgColor={"gray.200"} borderRadius={"md"}></Box>
          <Box boxSize={"100px"} bgColor={"gray.200"} borderRadius={"md"}></Box>
          <Box boxSize={"100px"} bgColor={"gray.200"} borderRadius={"md"}></Box>
        </HStack>
      </HStack>
    </HStack>
  );
};

export default OtherHeader;
