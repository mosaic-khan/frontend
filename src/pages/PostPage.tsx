import {
  Avatar,
  Box,
  Center,
  HStack,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import UserNavigation from "../components/Navigation/ProfileNavigation";
import ImageSection from "../components/postPage/ImageSection";
import CommentSection from "../components/postPage/CommentSection";
import LikeIcon from "../components/Icons/LikeIcon";
import CommentsIcon from "../components/Icons/CommensIcon";
import { CrossButton } from "../components/Buttons";
import CaptionDetails from "../components/postPage/CaptionSection";
const H = 500;
const W = 1000;
const PostPage = () => {
  return (
    <Box h="100vh" bgColor="gray.100">
      <Box w="full" position="fixed" zIndex={10}>
        {/* navbar */}
        <UserNavigation />
      </Box>
      <Center boxSize="100%">
        <Center pos="relative" w="1040px" h="540px">
          <CrossButton
            position="absolute"
            left="0%"
            top="0%"
            onClick={() => console.log("todo")}
          />
          <HStack
            h={`${H}px`}
            w={`${W}px`}
            // marginTop="10%"
            marginTop="0%"
            borderRadius="md"
            overflow="hidden"
            bg="gray.50"
            shadow="2xl"
          >
            {/*Image section*/}
            <ImageSection />
            {/*Caption section*/}
            <VStack h="full" w="400px" alignItems="right" padding={4}>
              {/*User Info*/}
              <HStack dir="rtl" spacing="20px">
                <Avatar />
                <Heading fontSize="30px" textColor="gray.700">
                  نام کاربری
                </Heading>
              </HStack>

              {/*Post Detail*/}
              <HStack h="400px" w="full" dir="rtl" padding={2}>
                <CaptionDetails />
              </HStack>
              <HStack dir="rtl" justifyContent="space-between">
                <Text
                  marginRight={2}
                  onClick={() => console.log("todo")}
                  _hover={{
                    cursor: "pointer",
                    color: "brand.900",
                  }}
                >
                  <b>۵۰۰</b> لایک
                </Text>
                <HStack marginLeft={2}>
                  <LikeIcon />
                  <CommentsIcon />
                </HStack>
              </HStack>
              {/*Comment section*/}
              <CommentSection />
            </VStack>
          </HStack>
        </Center>
      </Center>
    </Box>
  );
};

export default PostPage;
