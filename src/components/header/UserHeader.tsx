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
    <HStack
      bg="white"
      w="85%"
      h="100%"
      boxShadow="md"
      borderRadius="lg"
      marginTop="50px"
    >
      <Box bg="white" w="50%" h="100%">
        <HStack alignItems="start" pl={10}>
          <Box bg="gray.200" ml={50} m={3} borderRadius={100}>
            <Box bg="gray.50" borderRadius={100} m={1}>
              <Avatar
                boxSize="150px"
                m={1}
                name={userProfile?.username}
                bgColor="brand.400"
                src={
                  "http://back.khanmedia.ir:9290" + userProfile?.profilePicUrl
                }
                boxShadow="md"
              />
            </Box>
          </Box>

          <VStack paddingTop="5%" h="100%" w="100%">
            <Heading fontWeight="bold" color="gray.900">
              {userProfile?.username}
            </Heading>
            <HStack fontSize="sm">
              <Text>{userProfile?.followerCnt.toString()} دنبال کننده</Text>
              <Text>{userProfile?.followingCnt.toString()} دنبال شونده</Text>
            </HStack>
            <VStack spacing={1} pb={3}>
              <Text color="gray.500">
                {userProfile?.bio ? userProfile?.bio : "بیو"}
              </Text>
              <Text fontSize="sm" color="gray.300">
                {userProfile?.city ? userProfile?.city : "شهر"}
              </Text>
            </VStack>
            </VStack>
        </HStack>
      </Box>
      <Spacer />
       <Grid
        w="45%"
        h="100%"
        templateColumns="repeat(3, 1fr)"
        pos="relative"
        pr={10}
        pl={10}
      >
        <GridItem boxSize="100px" bg="gray.200" borderRadius="md" />
        <GridItem boxSize="100px" bg="gray.200" borderRadius="md" />
        <GridItem boxSize="100px" bg="gray.200" borderRadius="md" />
      </Grid>
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
