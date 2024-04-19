import { Box, Center, HStack, ScaleFade, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import HeaderMenuItem from "./HeaderMenuItem";
import { ChevronUpIcon } from "@chakra-ui/icons";

interface Props {
  itemTexts: string[];
}

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

interface BoxConfig {
  h: string;
  w: string;
  borderRadius: string;
  marginTop: string;
  marginBottom: string;
}

const HeaderMenu = ({ itemTexts }: Props) => {
  const [state, setState] = useState(0);

  const toggleOpen = () => {
    if (state == 0 || state == 1) setState(2);
    else setState(1);
  };

  const topProps: BoxConfig = {
    h: "12px",
    w: "50px",
    borderRadius: "10px 10px 2px 2px",
    marginTop: "0px",
    marginBottom: "3px",
  };

  const middleAround: BoxConfig = {
    h: "4px",
    w: "40px",
    borderRadius: "3px 3px 3px 3px",
    marginTop: "0px",
    marginBottom: "0px",
  };

  const middleCenter: BoxConfig = {
    h: "8px",
    w: "50px",
    borderRadius: "5px 5px 5px 5px",
    marginTop: "0px",
    marginBottom: "0px",
  };

  const bottom: BoxConfig = {
    h: "8px",
    w: "50px",
    borderRadius: "2px 2px 6px 6px",
    marginTop: "3px",
    marginBottom: "0px",
  };

  return (
    <Box
      h="50px"
      w="50px"
      onClick={toggleOpen}
      cursor="pointer"
      _hover={
        state != 2
          ? {
              transform: "scale(1.1)",
            }
          : {}
      }
    >
      <ScaleFade initialScale={0.2} in={state == 2} delay={0.3}>
        <Center h="50px" w="50px">
          <ChevronUpIcon boxSize="40px" color={"brand.200"} />
        </Center>
      </ScaleFade>
      <ChakraBox
        animate={
          state == 2
            ? {
                top: ["0px", "50px"],
              }
            : state == 1
            ? { top: ["50px", "0px"] }
            : {}
        }
        // @ts-ignore no problem in operation, although type error appears.
        transition={{
          duration: 0.7,
          ease: "easeInOut",
        }}
        position="relative"
        zIndex="2"
        marginTop="-46px"
        top={state == 2 ? "60px" : "0px"}
      >
        <VStack spacing="0px">
          <HeaderMenuItem
            state={state}
            boxConfig={topProps}
            color="orange.400"
            text={itemTexts[0]}
          />
          <HeaderMenuItem
            state={state}
            boxConfig={middleAround}
            color="brand.500"
            text={itemTexts[1]}
          />
          <HeaderMenuItem
            state={state}
            boxConfig={middleCenter}
            color="orange.800"
            text={itemTexts[2]}
          />
          <HeaderMenuItem
            state={state}
            boxConfig={middleAround}
            color="green.400"
            text={itemTexts[3]}
          />
          <HeaderMenuItem
            state={state}
            boxConfig={bottom}
            color="orange.400"
            text={itemTexts[4]}
          />
        </VStack>
      </ChakraBox>
    </Box>
  );
};

export default HeaderMenu;
