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
import { useEffect, useState } from "react";

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
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (!isHover) {
      const timer = setTimeout(() => setOpen(false), 200);
      return () => clearTimeout(timer);
    }
  }, [isHover]);

  return (
    <LinkBox
      bg="brand.500"
      borderRadius="40px"
      onMouseEnter={() => {
        setHover(true), setOpen(true);
      }}
      onMouseOut={() => setHover(false)}
    >
      <ChakraBox
        animate={
          isOpen
            ? {
                height: ["80px", "120px"],
              }
            : { height: ["120px", "80px"] }
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
            animate={
              isOpen
                ? {
                    height: ["70px", "110px"],
                    width: ["70px", "110px"],
                  }
                : { height: ["110px", "70px"], width: ["110px", "70px"] }
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
