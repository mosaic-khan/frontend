import {
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  useDisclosure,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";

interface Props {
  children: ReactNode;
  id: string;
  onChange: (value: string) => void;
  value: string;
  variant?: string;
  borderColor?: string;
}

export const PasswordField = ({
  children,
  id,
  value,
  borderColor,
  onChange,
}: Props) => {
  const { isOpen, onToggle } = useDisclosure();

  const onClickReveal = () => {
    onToggle();
  };

  return (
    <FormControl>
      <FormLabel htmlFor={id} dir="rtl" marginBottom="0px">
        {children}
      </FormLabel>
      <InputGroup>
        <InputRightElement>
          <IconButton
            variant="text"
            aria-label={isOpen ? "Mask password" : "Reveal password"}
            icon={isOpen ? <HiEye /> : <HiEyeOff />}
            onClick={onClickReveal}
          />
        </InputRightElement>
        <Input
          id={id}
          name={id}
          type={isOpen ? "text" : "password"}
          autoComplete="current-password"
          required
          value={value}
          onChange={(e) => onChange(e.target.value)}
          marginTop="0px"
          borderColor={borderColor}
        />
      </InputGroup>
    </FormControl>
  );
};

PasswordField.displayName = "PasswordField";
