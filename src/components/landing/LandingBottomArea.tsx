import { Box, HStack, VStack, Link, Heading, Image } from "@chakra-ui/react";
import logo from "../../assets/Logo_0_2_1.svg";

const LandingBottomArea = () => {
  return (
    <HStack
      bg="gray.100"
      h="200px"
      width="100%"
      justifyContent="space-between"
      borderRadius="0px 40px 0px 0px"
    >
      <Box width="300px" height="200px" />
      <VStack spacing="10px">
        <Link fontSize="13px" fontWeight="bold" _hover={{ color: "brand.500" }}>
          پرسش های متداول
        </Link>
        <Link fontSize="13px" fontWeight="bold" _hover={{ color: "brand.500" }}>
          اپلیکیشن موبایل
        </Link>
      </VStack>
      <VStack spacing="10px">
        <Link fontSize="13px" fontWeight="bold" _hover={{ color: "brand.500" }}>
          درباره خوان
        </Link>
        <Link fontSize="13px" fontWeight="bold" _hover={{ color: "brand.500" }}>
          تماس با ما
        </Link>
        <Link fontSize="13px" fontWeight="bold" _hover={{ color: "brand.500" }}>
          قوانین سایت
        </Link>
      </VStack>
      <Box width="300px">
        <HStack>
          <Heading>خوان</Heading>
          <Image src={logo} boxSize="60px" />
        </HStack>
      </Box>
    </HStack>
  );
};

export default LandingBottomArea;
