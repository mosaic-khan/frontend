import { Box, BoxProps, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

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

const HeaderMenu = () => {
  const [state, setState] = useState(0);

  const toggleOpen = () => {
    if (state == 0 || state == 1) setState(2);
    else setState(1);
  };

  const boxTransitionAnimation = (from: BoxConfig, to: BoxConfig) => {
    return {
      height: [from.h, to.h],
      width: [from.w, to.w],
      borderRadius: [from.borderRadius, to.borderRadius],
      marginTop: [from.marginTop, to.marginTop],
      marginBottom: [from.marginBottom, to.marginBottom],
    };
  };

  const animation = (original: BoxConfig) =>
    state == 2
      ? boxTransitionAnimation(original, dotBoxConfig)
      : state == 1
      ? boxTransitionAnimation(dotBoxConfig, original)
      : {};

  const transition = {
    duration: 0.5,
    ease: "easeInOut",
  };

  const dotBoxConfig: BoxConfig = {
    h: "16px",
    w: "16px",
    borderRadius: "8px 8px 8px 8px",
    marginTop: "30px",
    marginBottom: "0px",
  };

  const topProps: BoxConfig = {
    h: "16px",
    w: "60px",
    borderRadius: "16px 16px 0px 0px",
    marginTop: "0px",
    marginBottom: "2px",
  };

  const middleAround: BoxConfig = {
    h: "6px",
    w: "50px",
    borderRadius: "3px 3px 3px 3px",
    marginTop: "0px",
    marginBottom: "0px",
  };

  const middleCenter: BoxConfig = {
    h: "10px",
    w: "60px",
    borderRadius: "5px 5px 5px 5px",
    marginTop: "0px",
    marginBottom: "0px",
  };

  const bottom: BoxConfig = {
    h: "12px",
    w: "60px",
    borderRadius: "0px 0px 12px 12px",
    marginTop: "2px",
    marginBottom: "0px",
  };

  return (
    <Box h="60px" w="60px" marginLeft="18px" onClick={toggleOpen}>
      <ChakraBox
        animate={
          state == 2
            ? {
                top: ["0px", "60px"],
              }
            : state == 1
            ? { top: ["60px", "0px"] }
            : {}
        }
        // @ts-ignore no problem in operation, although type error appears.
        transition={{
          duration: 0.7,
          ease: "easeInOut",
        }}
        position="relative"
        zIndex="2"
        marginTop="3px"
        top={state == 2 ? "60px" : "0px"}
      >
        <VStack spacing="0px">
          <ChakraBox
            animate={animation(topProps)}
            // @ts-ignore no problem in operation, although type error appears.
            transition={transition}
            {...topProps}
            bg="#DC742B"
          />
          <ChakraBox
            animate={animation(middleAround)}
            // @ts-ignore no problem in operation, although type error appears.
            transition={transition}
            {...middleAround}
            bg="#DB022D"
          />
          <ChakraBox
            animate={animation(middleCenter)}
            // @ts-ignore no problem in operation, although type error appears.
            transition={transition}
            {...middleCenter}
            bg="#5A2804"
          />
          <ChakraBox
            animate={animation(middleAround)}
            // @ts-ignore no problem in operation, although type error appears.
            transition={transition}
            {...middleAround}
            bg="#45B207"
          />
          <ChakraBox
            animate={animation(bottom)}
            // @ts-ignore no problem in operation, although type error appears.
            transition={transition}
            {...bottom}
            bg="#DC742B"
          />
        </VStack>
      </ChakraBox>
    </Box>
  );
};

export default HeaderMenu;
