import {
  Box,
  HStack,
  Avatar,
  VStack,
  Heading,
  Text,
  useDisclosure,
  Button,
  GridItem,
  Grid,
  Spacer,
  Spinner,
  Center,
} from "@chakra-ui/react";
import { GradientRedButton } from "../Buttons";
import { useEffect, useState } from "react";
import userClient from "../../api/services/user-service";
import FollowerFollowingModal from "../userList/FollowerFollowingModal";
import { Profile } from "../../api/clients/user";

interface Props {
  userProfile: Profile | undefined;
  isLoading: boolean;
}

const OtherHeader = ({ userProfile, isLoading }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [followTab, setFollowTab] = useState<number>(0);
  const [followerCount, setFollowerCount] = useState<bigint>(
    userProfile?.followerCnt ? userProfile?.followerCnt : BigInt(0)
  );

  const [followed, setFollowed] = useState<boolean>(false);

  useEffect(() => {
    setFollowed(userProfile?.isFollowed ? userProfile?.isFollowed : false);
  }, [userProfile?.isFollowed]);

  const handleClick = () => {
    if (followed) unfollow();
    else follow();
  };

  const follow = () => {
    userClient
      .follow(
        {
          profileID: userProfile?.id ? userProfile?.id : BigInt(0),
        },
        {
          meta: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      )
      .then((res) => {
        console.log("follow response: ", res);
        setFollowed(true);
        setFollowerCount(followerCount + BigInt(1));
      })
      .catch((err) => {
        console.log("follow error: ", err);
      });
  };

  const unfollow = () => {
    userClient
      .unfollow(
        {
          profileID: userProfile?.id ? userProfile?.id : BigInt(0),
        },
        {
          meta: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      )
      .then((res) => {
        console.log("unfollow response: ", res);
        setFollowed(false);
        setFollowerCount(followerCount - BigInt(1));
      })
      .catch((err) => {
        console.log("unfollow error: ", err);
      });
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
                    onClick={() => handleClick()}
                  >
                    {followed ? "حذف" : "دنبال کردن "}
                  </GradientRedButton>
                </HStack>
                <HStack spacing={5} fontSize="sm">
                  <Button
                    variant="text"
                    onClick={() => {
                      setFollowTab(0);
                      onOpen();
                    }}
                  >
                    {userProfile?.followingCnt.toString()} دنبال شونده
                  </Button>
                  <Button
                    variant="text"
                    onClick={() => {
                      setFollowTab(1);
                      onOpen();
                    }}
                  >
                    {followerCount.toString()} دنبال کننده
                  </Button>
                </HStack>
                <Text fontSize="sm" color="gray.300">
                  {userProfile?.city ? userProfile?.city : "شهر"}
                </Text>
                <Text
                  color="gray.500"
                  textAlign="center"
                  fontSize="xs"
                  maxW="150px"
                >
                  {userProfile?.bio ? userProfile?.bio : "بیو"}
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
          <GridItem boxSize="120px" bg="gray.200" borderRadius="md" />
          <GridItem boxSize="120px" bg="gray.200" borderRadius="md" />
          <GridItem boxSize="120px" bg="gray.200" borderRadius="md" />
        </Grid>
      </HStack>
      <FollowerFollowingModal
        profileId={BigInt(userProfile ? userProfile.id : 0)}
        isOpen={isOpen}
        onClose={onClose}
        startIndex={followTab}
        followersCnt={followerCount}
      />
    </>
  );
};

export default OtherHeader;
