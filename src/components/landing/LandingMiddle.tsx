import { Box, HStack, Heading, VStack } from "@chakra-ui/layout";
import { Image, Text } from "@chakra-ui/react";
import burger from "../../assets/Burger_2_with_icons.png";

const LandingMiddle = () => {
  return (
    <Box w="100%" h="560px">
      <HStack h="100%" justifyContent="space-between">
        <Box w="700px" h="700px" marginLeft="50px" marginTop="-20px">
          <Image src={burger} boxSize="700px" objectFit="contain" />
        </Box>
        <VStack h="100%" alignItems="end" marginRight="50px">
          <Heading
            color="black"
            textAlign="right"
            fontSize="50px"
            fontWeight="bold"
            marginTop="120px"
          >
            اپلیکیشن خوان
          </Heading>
          <Text
            marginTop="40px"
            textAlign="right"
            color="black"
            fontWeight="bold"
            dir="rtl"
            w="500px"
          >
            {
              "با اپلیکیشن خوان میتوانید به راحتی میان صد ها دستور آشپزی جستوجو کنید، نظرات دیگران را بخوانید و دستور مناسب برای خود را پیدا کنید تا یک غذای خوش مزه و به یاد ماندنی را درست کنید و در کنار خانواده و دوستان از آن لذت ببرید."
            }
            {
              "اگر آشپز خوبی هستی میتوانی دستور های آشپزی خودت را به اشتراک بگذاری تا هم دیگران بتوانند از آن استفاده کنند و هم نظرات دیگران درباره غذای خودت بدانی بتوانی بهترش کنی."
            }
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default LandingMiddle;
