import { Image } from "@chakra-ui/image";
import logo from "../../assets/Logo_0_2_1.svg";

interface Props {
  onClick: () => void;
}

const Logo = ({ onClick }: Props) => {
  return <Image src={logo} boxSize="40px" onClick={onClick} cursor="pointer" />;
};

export default Logo;
