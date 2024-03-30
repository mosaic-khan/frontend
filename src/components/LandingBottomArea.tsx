import { Box, HStack, VStack, Link } from "@chakra-ui/react";

const LandingBottomArea = () => {
  return (
    <HStack
      bg="gray.100"
      h="200px"
      width="100%"
      justifyContent="space-between"
      borderRadius="0px 40px 0px 0px"
      overflow="hidden"
    >
      <Box bgColor="gray.100" width="300px" height="200px" />
      <VStack spacing="10px">
        <Link fontSize="13px" fontWeight="bold" _hover={{ color: "#ff004c" }}>
          پرسش های متداول
        </Link>
        <Link fontSize="13px" fontWeight="bold" _hover={{ color: "#ff004c" }}>
          اپلیکیشن موبایل
        </Link>
      </VStack>
      <VStack spacing="10px">
        <Link fontSize="13px" fontWeight="bold" _hover={{ color: "#ff004c" }}>
          درباره خوان
        </Link>
        <Link fontSize="13px" fontWeight="bold" _hover={{ color: "#ff004c" }}>
          تماس با ما
        </Link>
        <Link fontSize="13px" fontWeight="bold" _hover={{ color: "#ff004c" }}>
          قوانین سایت
        </Link>
      </VStack>
      <Box bgColor="gray.100" width="300px" height="200px" />
    </HStack>
  );
};

export default LandingBottomArea;
