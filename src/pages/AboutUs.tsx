import { Box, Heading, Text, Image, VStack, Divider } from "@chakra-ui/react";
import logo from "../assets/Logo_0_2_1.svg";
import ResetPassNav from "../components/ResetPassword/NavSetting";
import BG_bottom_right from "../assets/BG_bottom_right.svg";
import BG_bottom_left from "../assets/BG_top_left.svg";
const AboutUs = () => {
  return (
    <Box position="relative">
      <ResetPassNav />
      <Box
        bg="gray.50"
        p={10}
        borderRadius="md"
        boxShadow="lg"
        maxW="800px"
        mx="auto"
        mt={20}
      >
        <VStack spacing={6} textAlign="center">
          <Heading as="h1" size="xl" color="brand.700">
            درباره ما
          </Heading>
          <Image
            src={logo}
            alt="About Us"
            boxSize="150px"
            objectFit="cover"
            mb={4}
          />
          <Text fontSize="lg" color="gray.700" dir="rtl">
            "خوان" به معنای سفره‌ای است که همه دور آن جمع می‌شویم و غذاهای متنوع
            و لذیذ را با هم به اشتراک می‌گذاریم. این پلتفرم با هدف معرفی و ترویج
            فرهنگ غذایی غنی و متنوع ایران و جهان ایجاد شده است.
          </Text>
          <Divider borderColor="gray.300" my={6} />
          <Text
            fontSize="lg"
            textAlign="justify"
            lineHeight="tall"
            dir="rtl"
            color="gray.700"
          >
            در "خوان"، ما معتقدیم که غذا فراتر از یک نیاز روزمره است؛ غذا هنر،
            فرهنگ، و پلی است که ما را به یکدیگر نزدیک‌تر می‌کند. تیم ما متشکل از
            متخصصین و علاقه‌مندان به غذا است که با عشق و انگیزه بالا در جهت
            ارائه محتوای باکیفیت و مفید به مخاطبان تلاش می‌کنند.
          </Text>
          <Text
            fontSize="lg"
            textAlign="justify"
            lineHeight="tall"
            dir="rtl"
            color="gray.700"
            mt={6}
          >
            ما با ارائه دستورپخت‌های جدید، معرفی رستوران‌های برتر، و به
            اشتراک‌گذاری نکات و ترفندهای آشپزی، سعی داریم تا تجربه‌ای لذت‌بخش و
            آموزنده برای شما فراهم کنیم. در "خوان" هر کسی می‌تواند جایی داشته
            باشد و از سفره‌ای که همه در آن شریک هستند، بهره‌مند شود.
          </Text>
          <Text
            fontSize="lg"
            textAlign="justify"
            lineHeight="tall"
            dir="rtl"
            color="gray.700"
          >
            هدف ما ایجاد فضایی است که در آن همه می‌توانند دور هم جمع شوند،
            طعم‌های جدید را کشف کنند، و لحظاتی خوش و دلپذیر را با دوستان و
            خانواده خود به اشتراک بگذارند. ما امیدواریم که با همراهی شما،
            بتوانیم به ارتقای فرهنگ غذایی جامعه کمک کرده و لحظات خوشی را برای
            شما به ارمغان بیاوریم.
          </Text>
        </VStack>
        <Image
          src={BG_bottom_right}
          position="fixed"
          bottom="0px"
          right="0px"
          zIndex={-10}
        />
        <Image
          src={BG_bottom_left}
          position="fixed"
          top="60px"
          left="0px"
          zIndex={-10}
        />
      </Box>
    </Box>
  );
};

export default AboutUs;
