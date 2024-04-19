import {
  Center,
  Box,
  keyframes,
  HStack,
  ScaleFade,
  VStack,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import SignUpInput from "./SignUpInput";
import LoginInput from "./LoginInput";
import LoginInfo from "./LoginInfo";
import SignUpInfo from "./SignUpInfo";
import BG_top_left from "../../assets/BG_top_left.svg";
import BG_bottom_right from "../../assets/BG_bottom_right.svg";
import VerificationCodeInput from "./VerificationCodeInput";
import SignUpProcess from "./SignUpProcess";

const moveMargin = (from: number, to: number) => {
  return keyframes`  
  from {margin-left: ${from}%;}   
  to {margin-left: ${to}%;} 
`;
};

const h = 500;
const w = 800;
const topM = 120;
const fadeScale = 0.2;

const RegisterMainLayout = () => {
  const [layoutState, setLayoutState] = useState(0);

  const margin = () => {
    switch (layoutState) {
      case 0 - 1:
        return "0%";
      case 2:
        return "50%";
    }
  };

  const contentMargin = () => {
    switch (layoutState) {
      case 0 - 1:
        return "0%";
      case 2:
        return "-100%";
    }
  };

  const moveAnimation = () => {
    switch (layoutState) {
      case 0:
        return "";
      case 1:
        return `${moveMargin(50, 0)} 0.2s ease-out`;
      case 2:
        return `${moveMargin(0, 50)} 0.2s ease-out`;
    }
  };

  const moveContentAnimation = () => {
    switch (layoutState) {
      case 0:
        return "";
      case 1:
        return `${moveMargin(-100, 0)} 0.2s ease-out`;
      case 2:
        return `${moveMargin(0, -100)} 0.2s ease-out`;
    }
  };

  const togglePosition = () => {
    if (layoutState == 0) setLayoutState(2);
    else if (layoutState == 1) setLayoutState(2);
    else setLayoutState(1);
  };

  return (
    <Box>
      <Center marginTop={`${topM}px`} zIndex="1" position="relative">
        <Box
          boxShadow="dark-lg"
          bg="white"
          height={`${h}px`}
          width={`${w}px`}
          borderRadius="10px"
          overflow="hidden"
        >
          <HStack height="100%" width="100%" spacing="0px">
            <SignUpProcess h={h} active={layoutState == 2} />
            <Box height="100%" width="50%">
              <Center height="100%" width="100%">
                <ScaleFade
                  initialScale={fadeScale}
                  in={layoutState == 0 || layoutState == 1}
                >
                  <LoginInput />
                </ScaleFade>
              </Center>
            </Box>
          </HStack>
          <Box
            bg="brand.500"
            height="100%"
            width="50%"
            overflow="hidden"
            position="relative"
            top={`-${h}px`}
            marginLeft={margin()}
            animation={moveAnimation()}
          >
            <HStack
              height="100%"
              width="200%"
              marginLeft={contentMargin()}
              animation={moveContentAnimation()}
            >
              <Center height="100%" width="100%">
                <LoginInfo toggle={togglePosition} />
              </Center>
              <Center height="100%" width="100%">
                <SignUpInfo toggle={togglePosition} />
              </Center>
            </HStack>
          </Box>
        </Box>
      </Center>
      <VStack
        h="100vh"
        justifyContent="space-between"
        marginTop={`-${topM + h}px`}
      >
        <HStack dir="ltr" w="100%">
          <Image src={BG_top_left} />
        </HStack>
        <HStack dir="rtl" w="100%">
          <Image src={BG_bottom_right} />
        </HStack>
      </VStack>
    </Box>
  );
};

export default RegisterMainLayout;
