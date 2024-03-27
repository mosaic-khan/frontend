import { Center, Box, keyframes, HStack, ScaleFade } from "@chakra-ui/react";
import { useState } from "react";
import SignUpInput from "./SignUpInput";
import LoginInput from "./LoginInput";
import LoginInfo from "./LoginInfo";
import SignUpInfo from "./SignUpInfo";

const moveMargin = (from: number, to: number) => {
  return keyframes`  
  from {margin-left: ${from}%;}   
  to {margin-left: ${to}%;} 
`;
};

const h = "500px";
const w = "800px";
const fadeScale = 0.5;

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
    <Center marginTop="120px">
      <Box
        bg="red.50"
        height={h}
        width={w}
        borderRadius="10px"
        overflow="hidden"
      >
        <HStack height="100%" width="100%" spacing="0px">
          <Center width="50%" height="100%">
            <ScaleFade initialScale={fadeScale} in={layoutState == 2}>
              <SignUpInput />
            </ScaleFade>
          </Center>
          <Center height="100%" width="50%">
            <ScaleFade
              initialScale={fadeScale}
              in={layoutState == 0 || layoutState == 1}
            >
              <LoginInput />
            </ScaleFade>
          </Center>
        </HStack>
        <Box
          bg="red.500"
          height="100%"
          width="50%"
          overflow="hidden"
          position="relative"
          top={"-" + h}
          marginLeft={margin()}
          animation={moveAnimation()}
          onClick={togglePosition}
        >
          <HStack
            height="100%"
            width="200%"
            marginLeft={contentMargin()}
            animation={moveContentAnimation()}
          >
            <Center height="100%" width="100%">
              <LoginInfo />
            </Center>
            <Center height="100%" width="100%">
              <SignUpInfo />
            </Center>
          </HStack>
        </Box>
      </Box>
    </Center>
  );
};

export default RegisterMainLayout;
