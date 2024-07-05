import {
  Box,
  HStack,
  VStack,
  Link,
  Heading,
  Image,
  Text,
  IconButton,
} from "@chakra-ui/react";
import logo from "../../../assets/Logo_0_2_1.svg";
import ScrollToTop from "./ScrollToTop";
import NewsletterInput from "./NewsletterInput";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <HStack
      bg="gray.100"
      h="250px"
      width="100%"
      justifyContent="space-between"
      spacing="20px"
    >
      <Box width="100px" height="250px"></Box>
      <Box width="300px">
        <HStack>
          <Heading>خوان</Heading>
          <Image src={logo} boxSize="60px" />
        </HStack>
      </Box>
      <VStack spacing="10px" textAlign="right" marginTop="35px">
        <Link
          textAlign="right"
          fontWeight="bold"
          _hover={{ color: "brand.500" }}
        >
          <Heading fontSize="25px" textAlign="right">
            شبکه های اجتماعی
          </Heading>
        </Link>
        <Text textAlign="right">ما را در شبکه های اجتماعی دنبال کنید</Text>
        <HStack>
          <IconButton
            aria-label="Instagram Icon"
            borderRadius="20%"
            colorScheme="brand"
            variant="solid"
            icon={<FaInstagram />}
            size="lg"
            isRound={false}
          />
          <IconButton
            aria-label="Twitter Icon"
            borderRadius="20%"
            colorScheme="brand"
            variant="solid"
            icon={<FaTwitter />}
            size="lg"
            isRound={false}
          />
          <IconButton
            aria-label="Telegram Icon"
            borderRadius="20%"
            colorScheme="brand"
            variant="solid"
            icon={<FaTelegram />}
            size="lg"
            isRound={false}
          />
          <IconButton
            aria-label="Facebook Icon"
            borderRadius="20%"
            colorScheme="brand"
            variant="solid"
            icon={<FaFacebook />}
            size="lg"
            isRound={false}
          />
        </HStack>
      </VStack>
      <VStack spacing="10px">
        <Link fontSize="13px" fontWeight="bold" _hover={{ color: "brand.500" }}>
          <Heading textAlign="right" fontSize="25px">
            خوان
          </Heading>
        </Link>
        <Link
          textAlign="right"
          fontSize="13px"
          fontWeight="bold"
          _hover={{ color: "brand.500" }}
          href="/aboutUs"
        >
          درباره ما
        </Link>
      </VStack>
      <VStack spacing="10px">
        <Link
          textAlign="right"
          fontSize="13px"
          fontWeight="bold"
          _hover={{ color: "brand.500" }}
        >
          <Heading textAlign="right" fontSize="25px">
            تماس با ما
          </Heading>
        </Link>
        <Text justifyContent="right" textAlign="right">
          تهران، خیابان حیدرخانی، دانشگاه علم و صنعت
        </Text>
        <Text justifyContent="" textAlign="right">
          تلفن تماس: 44444444-021
        </Text>
      </VStack>
      <VStack
        spacing="10px"
        maxWidth="300px"
        marginRight="100px"
        textAlign="right"
        marginTop="40px"
      >
        <Link fontSize="13px" fontWeight="bold" _hover={{ color: "brand.500" }}>
          <Heading fontSize="25px" textAlign="right">
            خبرنامه
          </Heading>
        </Link>
        <Text textAlign="right">
          برای دریافت آخرین اخبار و غذاهای برتر هفته ایمیل خود را وارد نموده و
          در خبرنامه ثبت نام کنید
        </Text>
        <NewsletterInput />
        <ScrollToTop />
      </VStack>
    </HStack>
  );
};

export default Footer;
