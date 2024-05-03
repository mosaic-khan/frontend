import { Center, ScaleFade, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import LoginInput from "./LoginInput";
import { ForgotPassword } from "./ForgotPasswordInput";

interface Props {
  h: number;
  active: boolean;
}

const LoginProcess = ({ h, active }: Props) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (active) setStage(1);
    else setStage(0);
  }, [active]);

  return (
    <Box height="100%" width="100%">
      <Center height="100%" width="100%">
        <ScaleFade initialScale={0.2} in={stage == 1}>
          <LoginInput forgotPage={() => setStage(2)} />
        </ScaleFade>
      </Center>
      <Center height="100%" width="100%" marginTop={`-${h}px`}>
        <ScaleFade initialScale={0.2} in={stage == 2}>
          <ForgotPassword
            onSubmit={() => {
              setStage(1);
            }}
            onCancel={() => setStage(1)}
          />
        </ScaleFade>
      </Center>
    </Box>
  );
};

export default LoginProcess;
