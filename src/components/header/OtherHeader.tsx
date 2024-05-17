import { Box, HStack, Avatar, VStack, Heading, Text } from "@chakra-ui/react";
import { GradientRedButton } from "../Buttons";
import { useState } from "react";
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
        src={userProfile?.profilePicUrl}
        boxShadow="md"
      />
      <HStack spacing="50px">
        <VStack dir="rtl" alignItems="flex-start">
          <HStack spacing="50px">
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
                  userProfile?.isFollowed ? userProfile?.isFollowed : true
                )
              }
            >
              {/* دنبال کردن */}
              {userProfile?.isFollowed ? "حذف" : "دنبال کردن "}
            </GradientRedButton>
          </HStack>
          <Text fontSize="sm" color="gray.300">
            {userProfile?.city}
          </Text>
          <Text color="gray.500">{userProfile?.bio}</Text>
          <HStack spacing={5} fontSize="sm">
            <Text>{userProfile?.followerCnt.toString()} دنبال کننده</Text>
            <Text>{userProfile?.followingCnt.toString()} دنبال شونده</Text>
          </HStack>
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
