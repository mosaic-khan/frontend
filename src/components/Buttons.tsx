import { Button, ButtonProps, IconButton } from "@chakra-ui/react";
import { ReactNode } from "react";
import "@react-shamsi/calendar/dist/styles.css";
import "@react-shamsi/timepicker/dist/styles.css";
import { DatePicker } from "@react-shamsi/datepicker";
import { TThemeClasses } from "@react-shamsi/calendar";
import { ArrowBackIcon } from "@chakra-ui/icons";

const brandCalendar: TThemeClasses = {
  headerBackgroundColor: "#FF004B",
  headerTextColor: "white",
  chevronRightColor: "black",
  chevronLeftColor: "black",
  topBarTextColor: "black",
  bodyBackgroundColor: "white",
  weekDaysTextColor: "white",
  weekDaysBackgroundColor: "#B52B41",
  daysColor: "black",
  daysBackgroundColor: "white",
  todayBorderColor: "white",
  daysSelectedColor: "white",
  daysSelectedBackgroundColor: "#FF004B",
  offDaysColor: "#FF004B",
  offDaysSelectedColor: "white",
  footerBackgroundColor: "white",
  footerButtonColor: "black",
  clock: {
    backgroundColor: "white",
    clockBackgroundColor: "#FF004B",
    clockLabelsColor: "white",
    pointerBackgroundColor: "gray",
    amPmColor: "white",
    amPmActiveBackgroundColor: "#FF004B",
  },
};
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
        placeholder="--/--/--"
        persianDigits
        calendarProps={{
          theme: brandCalendar,
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

export const BackButton = ({ onClick }: ButtonProps) => {
  return (
    <IconButton
      h="30px"
      w="40px"
      aria-label="back-button"
      icon={<ArrowBackIcon />}
      color="brand.800"
      bgColor="brand.50"
      _hover={{
        boxShadow: "sm",
        bg: "brand.50",
        transform: "translateY(-3px)",
      }}
      onClick={onClick}
    ></IconButton>
  );
};
