import { Button, ButtonProps } from "@chakra-ui/react";
import { ReactNode } from "react";
import "@react-shamsi/calendar/dist/styles.css";
// If you want to use the time picker
import "@react-shamsi/timepicker/dist/styles.css";
import { DatePicker } from "@react-shamsi/datepicker";
interface Props extends ButtonProps {
  children: ReactNode;
}

export const RedButton = ({ children, ...rest }: Props) => {
  return (
    <Button
      width="200px"
      colorScheme="red"
      color="brand.500"
      variant="outline"
      borderRadius="100px"
      _hover={{
        fontWeight: "bold",
        boxShadow: "lg",
        bg: "brand.50",
        transform: "translateY(-3px)",
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export const WhiteButton = ({ children, ...rest }: Props) => {
  return (
    <Button
      color="white"
      colorScheme="white"
      variant="outline"
      borderRadius="100px"
      width="200px"
      _hover={{
        fontWeight: "bold",
        boxShadow: "lg",
        transform: "translateY(-3px)",
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};
export const GradientRedButton = ({ children, ...rest }: Props) => {
  return (
    <Button
      borderRadius="5px"
      width="150px"
      height="70px"
      bgGradient="linear(to-r, brand.300, brand.500)"
      transition=" 0.3s ease"
      _hover={{
        fontWeight: "bold",
        boxShadow: "lg",
        transform: "translateY(-3px)",
      }}
      _focus={{
        bgGradient: "linear(to-r, brand.300, brand.600)",
        fontWeight: "bold",
        boxShadow: "xl",
        transform: "translateY(-3px)",
      }}
      _active={{
        bgGradient: "linear(to-r, brand.300, brand.600)",
        fontWeight: "bold",
        boxShadow: "lg",
        transform: "translateY(1px)",
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export const ShamsiCalendarButton = () => {
  return (
    <DatePicker
      dateFormat="yy/MM/dd"
      placeholder="--/--/----"
      persianDigits
      calendarProps={{
        theme: "light",
      }}
      style={{
        width: "100%",
        backgroundColor: "#EDF2F7",
        borderRadius: "0.375rem",
        padding: "0.5rem",
        color: "black",
        fontSize: "1rem",
      }}
    ></DatePicker>
  );
};
