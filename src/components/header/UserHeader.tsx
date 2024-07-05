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
  Image,
} from "@chakra-ui/react";
import FollowerFollowingModal from "../userList/FollowerFollowingModal";
import { useEffect, useState } from "react";
import { Profile } from "../../api/clients/user";
import { PinedPost, PostPreview } from "../../api/clients/post";
interface Props {
  userProfile: Profile | undefined;
  isLoading: boolean;
  pinnedPosts: PinedPost[] | null;
  unpinRequest: (id: bigint) => void;
}
const UserHeader = ({
  userProfile,
  isLoading,
  pinnedPosts,
  unpinRequest,
}: Props) => {
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
                    {userProfile?.followerCnt.toString()} دنبال کننده
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
          <GridItem
            boxSize="120px"
            bg="gray.200"
            borderRadius="md"
            overflow="hidden"
          >
            {pinnedPosts && pinnedPosts?.length >= 1 && (
              <Image
                src={"http://back.khanmedia.ir:9290/" + pinnedPosts[0].imageUrl}
                objectFit="cover"
                objectPosition="center"
                onClick={() => unpinRequest(pinnedPosts[0].id)}
              ></Image>
            )}
          </GridItem>
          <GridItem
            boxSize="120px"
            bg="gray.200"
            borderRadius="md"
            overflow="hidden"
          >
            {pinnedPosts && pinnedPosts?.length >= 2 && (
              <Box onClick={() => unpinRequest(pinnedPosts[1].id)}>
                <Image
                  src={
                    "http://back.khanmedia.ir:9290/" + pinnedPosts[1].imageUrl
                  }
                  objectFit="cover"
                  objectPosition="center"
                ></Image>
              </Box>
            )}
          </GridItem>
          <GridItem
            boxSize="120px"
            bg="gray.200"
            borderRadius="md"
            overflow="hidden"
          >
            {pinnedPosts && pinnedPosts?.length >= 3 && (
              <Image
                src={"http://back.khanmedia.ir:9290/" + pinnedPosts[2].imageUrl}
                onClick={() => unpinRequest(pinnedPosts[2].id)}
                objectFit="cover"
                objectPosition="center"
              ></Image>
            )}
          </GridItem>
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
