import { Text, VStack } from "@chakra-ui/react";
import LandingBottomArea from "../components/LandingBottomArea";
import LandingPagePanel from "../components/LandingPagePanel";

const Landing = () => {
  return (
    <VStack>
      <LandingPagePanel>
        <Text>Landing top part</Text>
      </LandingPagePanel>
      <LandingPagePanel>
        <Text>Landing middle part</Text>
      </LandingPagePanel>
      <LandingBottomArea />
    </VStack>
  );
};

export default Landing;
