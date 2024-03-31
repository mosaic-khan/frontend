import { Box, BoxProps, Center } from "@chakra-ui/layout";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  bgColor: string;
}

const boxConfig: BoxProps = {
  bgColor: "brand.50",
  width: "1280px",
  borderRadius: "0px 0px 100px 0px",
  marginTop: "80px",
  marginBottom: "80px",
  overflow: "hidden",
};

const LandingMainPart = ({ children, bgColor }: Props) => {
  return (
    <Center>
      <Box {...boxConfig} bgColor={bgColor}>
        {children}
      </Box>
    </Center>
  );
};

export default LandingMainPart;
