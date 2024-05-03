import {
  HStack,
  Text,
  Image,
  LinkBox,
  LinkOverlay,
  chakra,
  shouldForwardProp,
} from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Props {
  Username: string;
  image: string;
}

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const UserOfTopUsers = ({ Username, image }: Props) => {
  const [isHover, setHover] = useState(false);

  const boxRef = useRef(null);
  const imgRef = useRef(null);

  return (
    <LinkBox
      bg="brand.500"
      borderRadius="40px"
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseOut={() => setHover(false)}
    >
      <ChakraBox
        ref={boxRef}
        animate={
          isHover
            ? {
                height: ["80px", "120px"],
              }
            : {
                height: [
                  boxRef.current
                    ? boxRef.current.style.cssText.substring(8)
                    : "120px",
                  "80px",
                ],
              }
        }
        // @ts-ignore no problem in operation, although type error appears.
        transition={{
          duration: 0.7,
          ease: "easeInOut",
        }}
        w="500px"
      >
        <HStack justifyContent="space-between">
          <ChakraBox
            ref={imgRef}
            animate={
              isHover
                ? {
                    height: ["70px", "110px"],
                    width: ["70px", "110px"],
                  }
                : {
                    height: [
                      imgRef.current
                        ? imgRef.current.style.cssText.substring(8)
                        : "100px",
                      "70px",
                    ],
                    width: [
                      imgRef.current
                        ? imgRef.current.style.cssText.substring(8)
                        : "100px",
                      "70px",
                    ],
                  }
            }
            // @ts-ignore no problem in operation, although type error appears.
            transition={{
              duration: 0.7,
              ease: "easeInOut",
            }}
          >
            <LinkOverlay>
              <Image
                src={image}
                w="100%"
                h="100%"
                borderRadius="35px"
                marginLeft="5px"
                marginTop="5px"
              />
            </LinkOverlay>
          </ChakraBox>
          <Text
            paddingRight="40px"
            color="white"
            marginTop="5px"
            fontSize="30px"
          >
            {Username}
          </Text>
        </HStack>
      </ChakraBox>
    </LinkBox>
  );
};

export default UserOfTopUsers;
