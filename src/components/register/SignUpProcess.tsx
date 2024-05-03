import { Center, ScaleFade, Box } from "@chakra-ui/react";
import SignUpInput from "./SignUpInput";
import VerificationCodeInput from "./VerificationCodeInput";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  h: number;
  active: boolean;
}

const SignUpProcess = ({ h, active }: Props) => {
  const navigate = useNavigate();
  const [stage, setStage] = useState(0);
  const [signUpToken, setSignUpToken] = useState("");

  useEffect(() => {
    if (active) setStage(1);
    else setStage(0);
  }, [active]);

  return (
    <Box height="100%" width="50%">
      <Center height="100%" width="100%">
        <ScaleFade initialScale={0.2} in={stage == 1}>
          <SignUpInput
            onSubmit={(token) => {
              setSignUpToken(token);
              setStage(2);
            }}
          />
        </ScaleFade>
      </Center>
      <Center height="100%" width="100%" marginTop={`-${h}px`}>
        <ScaleFade unmountOnExit={true} initialScale={0.2} in={stage == 2}>
          <VerificationCodeInput
            token={signUpToken}
            onSubmit={() => {
              navigate("/home");
            }}
            onCancel={() => setStage(1)}
          />
        </ScaleFade>
      </Center>
    </Box>
  );
};

export default SignUpProcess;
