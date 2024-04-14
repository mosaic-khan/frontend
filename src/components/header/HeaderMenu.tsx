import { Box, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import HeaderMenuItem from "./HeaderMenuItem";

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
    <Box h="50px" w="50px" onClick={toggleOpen}>
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
        marginTop="4px"
        top={state == 2 ? "60px" : "0px"}
      >
        <VStack spacing="0px">
          <HeaderMenuItem state={state} boxConfig={topProps} color="#DC742B" />
          <HeaderMenuItem
            state={state}
            boxConfig={middleAround}
            color="#DB022D"
          />
          <HeaderMenuItem
            state={state}
            boxConfig={middleCenter}
            color="#5A2804"
          />
          <HeaderMenuItem
            state={state}
            boxConfig={middleAround}
            color="#45B207"
          />
          <HeaderMenuItem state={state} boxConfig={bottom} color="#DC742B" />
        </VStack>
      </ChakraBox>
    </Box>
  );
};

export default HeaderMenu;
