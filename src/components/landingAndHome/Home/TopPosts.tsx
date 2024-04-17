import {
  Box,
  HStack,
  VStack,
  Text,
  Heading,
  Image,
  Link,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import Image1 from "../../../assets/Home1.jpg";
import Image2 from "../../../assets/Home2.jpg";
import Image3 from "../../../assets/Home3.jpg";
import Image4 from "../../../assets/Home4.jpg";
import Image5 from "../../../assets/Home5.jpg";
import Post from "./PostOfTopPosts";
const TopPosts = () => {
  return (
    <VStack h="850px" w="100%" marginTop="40px">
      <HStack w="95%" justifyContent="space-between">
        <Box h="400px" w="700px" bg="brand.50" borderRadius="10%">
          <HStack>
            <LinkBox
              as="image"
              maxW="sm"
              p="0"
              borderWidth="none"
              //overflow="hidden"
              _hover={{ opacity: "0.95" }}
            >
              <LinkOverlay href="#">
                <Image
                  w="340px"
                  src={Image1}
                  alt="Image1"
                  borderRadius="15%"
                  marginLeft="10px"
                />
              </LinkOverlay>
            </LinkBox>

            <Box h="400px" w="350px" bg="brand.50" borderRadius="10%">
              <Link href="#" _hover={{ opacity: "0.85" }}>
                <Heading
                  as="h3"
                  textAlign="right"
                  paddingTop="30px"
                  paddingRight="30px"
                >
                  کباب ترکی
                </Heading>
              </Link>
              <Text
                textAlign="right"
                paddingRight="30px"
                paddingTop="50px"
                fontSize="20px"
              >
                در این بخش غذاهای برتر هفته رو براساس نظر کاربرها مشاهده می کنید
              </Text>
            </Box>
          </HStack>
        </Box>

        <Box h="400px" w="500px" bg="gray.100">
          <Heading as="h2" textAlign="center" paddingTop="30px">
            دستورهای آشپزی برتر هفته
          </Heading>
          <Text textAlign="center" paddingTop="50px" fontSize="20px">
            . در این بخش غذاهای برتر هفته رو براساس نظر کاربرها مشاهده می کنید
          </Text>
        </Box>
      </HStack>
      <HStack w="95%" justifyContent="space-between">
        <Post
          image={Image2}
          title="کوفته تبریزی"
          text=" توضیح غذا یا زیرعنوان غذا که توسط کاربر انتخاب شده بلابلابلابلا"
        ></Post>
        <Post
          image={Image3}
          title="خورش خلال"
          text=" توضیح غذا یا زیرعنوان غذا که توسط کاربر انتخاب شده بلابلابلابلا"
        ></Post>
        <Post
          image={Image4}
          title="ته چین مرغ"
          text=" توضیح غذا یا زیرعنوان غذا که توسط کاربر انتخاب شده بلابلابلابلا"
        ></Post>
        <Post
          image={Image5}
          title="خورش فسنجان"
          text=" توضیح غذا یا زیرعنوان غذا که توسط کاربر انتخاب شده بلابلابلابلا"
        ></Post>
      </HStack>
    </VStack>
  );
};

export default TopPosts;
