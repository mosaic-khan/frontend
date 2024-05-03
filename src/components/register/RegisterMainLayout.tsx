import {
  Center,
  Box,
  keyframes,
  HStack,
  VStack,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import LoginInfo from "./LoginInfo";
import SignUpInfo from "./SignUpInfo";
import BG_top_left from "../../assets/BG_top_left.svg";
import BG_bottom_right from "../../assets/BG_bottom_right.svg";
import SignUpProcess from "./SignUpProcess";
import LoginProcess from "./LoginProcess";

const moveMargin = (from: number, to: number) => {
  return keyframes`  
  from {margin-left: ${from}%;}   
  to {margin-left: ${to}%;} 
`;
};

const moveWidth = (from: number, to: number) => {
  return keyframes`  
  from {width: ${from}%;}   
  to {width: ${to}%;} 
`;
};

const h = 500;
const w = 800;
const percent1 = 30;
const percent2 = 70;
const topM = 120;

const RegisterMainLayout = () => {
  const [layoutState, setLayoutState] = useState(0);

  const calculateWidth = (x: number, y: number) => {
    switch (layoutState) {
      case 0:
      case 1:
        return `${x}%`;
      case 2:
        return `${y}%`;
    }
  };

  const moveAnimation = (x: number, y: number) => {
    switch (layoutState) {
      case 0:
        return "";
      case 1:
        return `${moveWidth(y, x)} 0.2s ease-out`;
      case 2:
        return `${moveWidth(x, y)} 0.2s ease-out`;
    }
  };

  const calculateMargin = (x: number, y: number) => {
    switch (layoutState) {
      case 0:
      case 1:
        return `${x}%`;
      case 2:
        return `${y}%`;
    }
  };

  const moveMarginAnimation = (x: number, y: number) => {
    switch (layoutState) {
      case 0:
        return "";
      case 1:
        return `${moveMargin(y, x)} 0.2s ease-out`;
      case 2:
        return `${moveMargin(x, y)} 0.2s ease-out`;
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
          <HStack
            height="100%"
            width="100%"
            spacing="0px"
            marginLeft={calculateMargin(30, 0)}
            animation={moveMarginAnimation(30, 0)}
          >
            <Center height="100%" width={`${percent2}%`}>
              <LoginProcess
                h={h}
                active={layoutState == 0 || layoutState == 1}
              />
            </Center>
            <Center height="100%" width={`${percent1}%`}>
              <SignUpInfo toggle={togglePosition} />
            </Center>
          </HStack>
          <Box
            bgGradient="linear(brand.500,brand.300)"
            height="100%"
            overflow="hidden"
            position="relative"
            top={`-${h}px`}
            width={calculateWidth(percent1, percent2)}
            animation={moveAnimation(percent1, percent2)}
          >
            <HStack
              height="100%"
              width="200%"
              spacing="0px"
              marginLeft={calculateMargin(0, -100)}
              animation={moveMarginAnimation(0, -100)}
            >
              <Center height="100%" width="100%">
                <LoginInfo toggle={togglePosition} />
              </Center>
              <Center height="100%" width="100%">
                <SignUpProcess h={h} active={layoutState == 2} />
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
