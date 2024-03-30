import { Box, BoxProps, Center } from "@chakra-ui/layout";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const boxConfig: BoxProps = {
  bgColor: "#ffe6ed",
  width: "1280px",
  height: "650px",
  borderRadius: "0px 0px 100px 0px",
  marginTop: "80px",
  marginBottom: "80px",
  overflow: "hidden",
};

const LandingMainPart = ({ children }: Props) => {
  return (
    <Center>
      <Box {...boxConfig}>{children}</Box>
    </Center>
  );
};

export default LandingMainPart;
