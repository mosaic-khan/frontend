import { BoxProps, chakra, shouldForwardProp, Text } from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";

interface Props {
  state: number;
  boxConfig: BoxConfig;
  color: string;
  text: string;
}

interface BoxConfig {
  h: string;
  w: string;
  borderRadius: string;
  marginTop: string;
  marginBottom: string;
}

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const HeaderMenuItem = ({ state, boxConfig, color, text }: Props) => {
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

  const dotBoxConfig: BoxConfig = {
    h: "18px",
    w: "18px",
    borderRadius: "9px 9px 9px 9px",
    marginTop: "20px",
    marginBottom: "0px",
  };

  const textBoxConfig: BoxProps = {
    h: "35px",
    w: "200px",
    bg: "white",
    borderWidth: "1px",
    borderRadius: "20px",
    marginLeft: "20px",
    marginTop: "-9px",
    boxShadow: "md",
  };

  return (
    <ChakraBox
      animate={animation(boxConfig)}
      // @ts-ignore no problem in operation, although type error appears.
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      {...boxConfig}
      bg={color}
    >
      {state == 2 && (
        <ChakraBox
          animate={
            state == 2
              ? {
                  width: ["35px", "35px", "150px"],
                  opacity: ["0%", "0%", "100%"],
                }
              : {}
          }
          // @ts-ignore no problem in operation, although type error appears.
          transition={{
            duration: 0.7,
            ease: "easeInOut",
          }}
          {...textBoxConfig}
        >
          <Text
            fontSize="16px"
            marginRight="20px"
            marginTop="5px"
            dir="rtl"
            color="gray.700"
          >
            {text}
          </Text>
        </ChakraBox>
      )}
    </ChakraBox>
  );
};

export default HeaderMenuItem;
