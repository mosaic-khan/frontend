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
  Button,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import Image1 from "../../../assets/joje.jpg";
import Image2 from "../../../assets/Home2.jpg";
import Image3 from "../../../assets/Home3.jpg";
import Image4 from "../../../assets/Home4.jpg";
import Image5 from "../../../assets/Home5.jpg";
import Post from "./PostOfTopPosts";
import { useNavigate } from "react-router-dom";

const TopPosts = () => {
  const navigate = useNavigate();

  return (
    <VStack h="850px" w="100%" marginTop="40px">
      <HStack w="95%" justifyContent="space-between">
        <Box h="400px" w="700px" bg="brand.50" borderRadius="60px">
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
                  boxSize="380px"
                  src={Image1}
                  alt="Image1"
                  borderRadius="50px"
                  marginLeft="10px"
                />
              </LinkOverlay>
            </LinkBox>
            <Box h="400px" w="350px" borderRadius="10%">
              <Link href="#" _hover={{ opacity: "0.85" }}>
                <Heading
                  fontSize="26"
                  textAlign="right"
                  paddingTop="30px"
                  paddingRight="30px"
                >
                  جوجه کباب
                </Heading>
              </Link>
              <Text
                textAlign="right"
                dir="rtl"
                paddingRight="30px"
                paddingTop="40px"
                fontSize="18"
              >
                با این دستور آشپزی به راحتی در خانه جوجه کباب خوش مزه درست کنید.
                تکه‌های مرغ را در تابه مناسبی، اما بدون روغن ریخته و روی حرارت
                متوسط قرار دهید، نمک، فلفل و پودر سیر را افزوده، درب تابه را
                گذاشته تا با بخار خودش پخته شود.
              </Text>
            </Box>
          </HStack>
        </Box>
        <VStack h="400px" w="500px" spacing="50px">
          <Heading w="100%" textAlign="right" paddingTop="40px" fontSize="32">
            دستورهای آشپزی برتر هفته
          </Heading>
          <Text w="100%" textAlign="right" dir="rtl" fontSize="20px">
            در این بخش غذاهای برتر هفته رو براساس نظر کاربرها مشاهده می کنید. با
            لایک کردن پست ها کمک کنید تا غذا های برتر شناخته بشوند.
          </Text>
          <HStack w="100%" dir="rtl">
            <Button
              color="green.400"
              variant="outline"
              size="lg"
              dir="rtl"
              fontSize="20"
              rightIcon={<ArrowBackIcon boxSize="6" />}
              onClick={() => {
                navigate("/timeLine");
              }}
            >
              بیشتر
            </Button>
          </HStack>
        </VStack>
      </HStack>
      <HStack w="95%" justifyContent="space-between">
        <Post
          image={Image2}
          title="کوفته تبریزی"
          text="یک غذای بسیار خوشمزه ترکی را به راحتی در خانه درست کنید ..."
        ></Post>
        <Post
          image={Image3}
          title="خورش خلال"
          text="طرز تهیه خورش خلال. برای شروع ابتدا در قابلمه ..."
        ></Post>
        <Post
          image={Image4}
          title="ته چین مرغ"
          text="با این دستور آشپزی ته چین مرغی درست کن که ..."
        ></Post>
        <Post
          image={Image5}
          title="خورش فسنجان"
          text="خورش فسنجان ایرانی یکی از غذای ها خوشمزه ..."
        ></Post>
      </HStack>
    </VStack>
  );
};

export default TopPosts;
