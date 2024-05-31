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
  Spinner,
  Center,
  Button,
} from "@chakra-ui/react";
import FollowerFollowingModal from "../userList/FollowerFollowingModal";
import { useState } from "react";
import { Profile } from "../../api/clients/user";
interface Props {
  userProfile: Profile | undefined;
  isLoading: boolean;
}
const UserHeader = ({ userProfile, isLoading }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [followTab, setFollowTab] = useState<number>(0);


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
                <Heading fontWeight="bold" color="gray.900">
                  {userProfile?.username}
                </Heading>
                <HStack fontSize="sm">
                  <Button
                    variant="text"
                    onClick={() => {
                      setFollowTab(1);
                      onOpen();
                    }}
                  >
                    {userProfile?.followerCnt.toString()} دنبال کننده
                  </Button>
                  <Button
                    variant="text"
                    onClick={() => {
                      setFollowTab(0);
                      onOpen();
                    }}
                  >
                    {userProfile?.followingCnt.toString()} دنبال شونده
                  </Button>
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

export default UserHeader;
