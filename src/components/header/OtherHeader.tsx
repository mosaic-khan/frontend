import {
  Grid,
  GridItem,
  HStack,
  Avatar,
  VStack,
  Heading,
  Text,
  useDisclosure,
  Spacer,
  Box,
  Center,
  Spinner,
} from "@chakra-ui/react";
import { GradientRedButton } from "../Buttons";
import { useEffect, useState } from "react";
import userClient from "../../api/services/user-service";
import FollowerFollowingModal from "../userList/FollowerFollowingModal";

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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [followTab, setFollowTab] = useState<number>(0);
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
        // console.log("getProfile response: ", res.response.profile);
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
    <>
      <HStack
        bg="white"
        w="85%"
        h="100%"
        boxShadow="md"
        borderRadius="lg"
        marginTop="50px"
      >
        <Box bg="white" w="50%" h="100%">
          {isLoading ? (
            <Center w="100%" h="200px">
              <Spinner size="sm" color="brand.600" />
            </Center>
          ) : (
            <HStack alignItems="start" pl={10}>
              <Box bg="gray.200" ml={50} m={3} borderRadius={100}>
                <Box bg="gray.50" borderRadius={100} m={1}>
                  <Avatar
                    boxSize="150px"
                    m={1}
                    name={userProfile?.username}
                    bgColor="brand.400"
                    src={
                      "http://back.khanmedia.ir:9290" +
                      userProfile?.profilePicUrl
                    }
                    boxShadow="md"
                  />
                </Box>
              </Box>
              <VStack paddingTop="5%" h="100%" w="100%">
                <HStack spacing="40px">
                  <Heading color="gray.900">{userProfile?.username}</Heading>
                  <GradientRedButton
                    width="90px"
                    height="30px"
                    color="white"
                    fontSize="sm"
                    borderRadius="20px"
                    onClick={() =>
                      onClick(
                        userProfile?.isFollowed
                          ? userProfile?.isFollowed
                          : false
                      )
                    }
                  >
                    {userProfile?.isFollowed ? "حذف" : "دنبال کردن "}
                  </GradientRedButton>
                </HStack>
                <HStack fontSize="sm">
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
          )}
        </Box>
        <Spacer />
        <Grid
          w="45%"
          h="100%"
          templateColumns="repeat(3, 1fr)"
          pos="relative"
          paddingRight={10}
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

export default OtherHeader;
