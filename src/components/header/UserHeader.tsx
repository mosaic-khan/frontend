import {
  Box,
  HStack,
  Avatar,
  VStack,
  Heading,
  Text,
  Grid,
  GridItem,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import userClient from "../../api/services/user-service";
import { useEffect, useState } from "react";
import { setProfileId } from "../userProfile/ProfileIdStorage";
import { Profile } from "../../api/clients/user";
import FollowerFollowingModal from "../userList/FollowerFollowingModal";

const UserHeader = () => {
  const [userProfile, setUserProfile] = useState<Profile | undefined>();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [followTab, setFollowTab] = useState<number>(0);

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
    <>
      <HStack
        bg="white"
        w="85%"
        h="100%"
        boxShadow="md"
        borderRadius="lg"
        marginTop="50px"

        // padding={1}
      >
        <Box bg="white" w="50%" h="100%" pos="relative">
          <HStack alignItems="start" pos="inherit">
            <Avatar
              margin="10%"
              boxSize="30%"
              name={userProfile?.username}
              bgColor="brand.400"
              src={"http://back.khanmedia.ir:9290" + userProfile?.profilePicUrl}
              boxShadow="md"
            />

            <VStack dir="rtl" paddingTop="10%" h="100%" w="100%" pos="relative">
              <Heading fontWeight="bold" dir="rtl" pos="inherit">
                {userProfile?.username}
              </Heading>
              <HStack spacing={5} fontSize="sm">
                {/* <Text>
              <b>۷۷۵</b> پست
            </Text> */}

                <Text
                  onClick={() => {
                    setFollowTab(1);
                    onOpen();
                  }}
                >
                  {userProfile?.followerCnt.toString()} دنبال کننده
                </Text>
                <Text
                  onClick={() => {
                    setFollowTab(0);
                    onOpen();
                  }}
                >
                  {userProfile?.followingCnt.toString()} دنبال شونده
                </Text>
              </HStack>
              <Text color="gray.500">
                {userProfile?.bio ? userProfile?.bio : "بیو"}
              </Text>
              <Text fontSize="sm" color="gray.300">
                {userProfile?.city ? userProfile?.city : "شهر"}
              </Text>
            </VStack>
          </HStack>
        </Box>
        <Spacer />
        <Grid
          w="35%"
          h="100%"
          templateColumns="repeat(3, 1fr)"
          pos="relative"
          paddingRight={10}
        >
          <GridItem boxSize="100px" bg="gray.200" borderRadius="md" />
          <GridItem boxSize="100px" bg="gray.200" borderRadius="md" />
          <GridItem boxSize="100px" bg="gray.200" borderRadius="md" />
        </Grid>
        {/* <Box boxSize="100px" bgColor={"gray.200"} borderRadius={"md"}></Box>
          <Box boxSize="100px" bgColor={"gray.200"} borderRadius={"md"}></Box>
          <Box boxSize="100px" bgColor={"gray.200"} borderRadius={"md"}></Box> */}
      </HStack>
      <FollowerFollowingModal
        profileId={BigInt(userProfile ? userProfile.id : 0)}
        isOpen={isOpen}
        onClose={onClose}
        startIndex={followTab}
      />
    </>
  );
};

export default UserHeader;
