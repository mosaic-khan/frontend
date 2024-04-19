import { Center, ScaleFade, Box } from "@chakra-ui/react";
import SignUpInput from "./SignUpInput";
import VerificationCodeInput from "./VerificationCodeInput";
import { useEffect, useState } from "react";

interface Props {
  h: number;
  active: boolean;
}

const SignUpProcess = ({ h, active }: Props) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (active) setStage(1);
  }, [active]);

  return (
    <Box height="100%" width="50%">
      <Center height="100%" width="100%">
        <ScaleFade initialScale={0.2} in={stage == 1}>
          <SignUpInput onSubmit={() => setStage(2)} />
        </ScaleFade>
      </Center>
      <Center height="100%" width="100%" marginTop={`-${h}px`}>
        <ScaleFade initialScale={0.2} in={stage == 2}>
          <VerificationCodeInput
            onSubmit={() => {}}
            onCancel={() => setStage(1)}
          />
        </ScaleFade>
      </Center>
    </Box>
  );
};

export default SignUpProcess;
