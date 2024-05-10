import {
  Avatar,
  Box,
  Center,
  HStack,
  Heading,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react";
import UserNavigation from "../components/Navigation/ProfileNavigation";
import ImageSection from "../components/postPage/ImageSection";
import CommentSection from "../components/postPage/CommentSection";
import LikeIcon from "../components/Icons/LikeIcon";
import CommentsIcon from "../components/Icons/CommensIcon";
import { CloseIcon } from "@chakra-ui/icons";
const H = 500;
const W = 1000;
const PostPage = () => {
  return (
    <Box h="100vh" bgColor="gray.100" position="relative">
      <Box position="fixed" w="full" h="10%">
        {/* navbar */}
        <UserNavigation />
      </Box>
      <Center position="relative" boxSize="100%">
          <IconButton
            aria-label="Close post"
            icon={<CloseIcon />}
            bgColor={"brand.700"}
            color="gray.100"
            boxShadow="md"
            position="absolute"
            top={"200px"}
            left={"200px"}
            zIndex={10}
            size="lg"
            isRound={true}
            onClick={() => console.log("Exit post")}
            _hover={{
                bg: "brand.800",
            }}
            />
        <HStack
          h={`${H}px`}
          w={`${W}px`}
          marginTop="10%"
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
              <Box
                w="60%"
                bg="white"
                height="400px"
                borderRadius="xl"
                boxShadow="md"
                overflowY="auto"
                maxHeight="300px"
                p={4}
                >
                توضیحات:
                <Text fontSize="sm">
                  پاستا یکی از انواع غذاهای بسیار محبوب و پر طرفدار در سراسر
                  جهان است که با دستورهای بسیار متنوعی تهیه می شود. این غذای
                  خوشمزه مانند لازانیا اصالتی ایتالیایی دارد و به دلیل طعم خوبش
                  در سراسر جهان به عنوان یک غذای بین المللی شناخته می شود. در
                  این مطلب، دستور یکی از پر طرفدارترین پاستا ها که چیکن پاستا یا
                  به زبان فارسی پاستای مرغ نام دارد را آماده کرده ایم، اگر
                  غذاهای مثل لازانیا و ماکارونی را می پسندید توصیه می کنیم حتما
                  پاستا را هم درست کنید، چون مطمئنا از این غذای خاص و خوشمزه هم
                  خوشتان خواهد آمد، برای مشاهده آموزش آشپزی ایتالیایی کامل و
                  مرحله به مرحله طرز تهیه پاستا در ادامه با سایت آموزشی و فرهنگی
                  چی شی همراه باشید.
                </Text>
              </Box>
              <Box
                h="full"
                w="40%"
                bg="gray.100"
                borderRadius="xl"
                boxShadow="md"
                overflowY="auto"
                maxHeight="300px"
                p={4}
                >
                مواد اولیه:
                <Text fontSize="sm">
                  پاستا ۴۰۰-۵۰۰ گرم قارچ ۲۰۰ گرم سینه مرغ ۱ عدد شیر ۱ فنجان سیر
                  ۱ حبه آب مرغ ۱ لیوان پنیر پارمزان ¼ فنجان آرد سفید ۲ قاشق
                  غذاخوری نمک و فلفل سیاه به اندازه کافی جعفری و روغن به اندازه
                  کافی
                </Text>
              </Box>
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
    </Box>
  );
};

export default PostPage;
