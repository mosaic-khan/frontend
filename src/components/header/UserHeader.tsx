import { Box, HStack, Avatar, VStack, Heading, Text } from "@chakra-ui/react";
import userClient from "../../api/services/user-service";
import { useEffect, useState } from "react";
import { setProfileId } from "../userProfile/ProfileIdStorage";
import { Profile } from "../../api/clients/user";

const UserHeader = () => {
  const [userProfile, setUserProfile] = useState<Profile | undefined>();
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
          setUserProfile(res.response.profile);
          setProfileId(res.response.profile.id);
        }
      })
      .catch((err) => {
        console.log("getProfile error: ", err);
      });
  }, []);
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
      <HStack alignItems="start" spacing={"50px"}>
        <VStack dir="rtl">
          <Heading fontWeight="bold" dir="rtl">
            {userProfile?.username}
          </Heading>
          <Text fontSize="sm" color="gray.300">
            {userProfile?.city ? userProfile?.city : "شهر"}
          </Text>
          <Text color="gray.500">
            {userProfile?.bio ? userProfile?.bio : "بیو"}
          </Text>
          <HStack spacing={5} fontSize="sm">
            {/* <Text>
              <b>۷۷۵</b> پست
            </Text> */}
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

export default UserHeader;
