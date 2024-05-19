import { Box } from "@chakra-ui/react";
import { TThemeClasses } from "@react-shamsi/calendar";
import { DatePicker } from "@react-shamsi/datepicker";
import moment from "jalali-moment";


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

interface Props {
  placeHolderDate: string;
  onChange: (dateString: string) => void;
}

const DatePickerInput = ({ placeHolderDate, onChange }: Props) => {
  let placeholder = "--/--/----";
  if (placeHolderDate != "0001-01-01") {
    moment.locale("fa", { useGregorianParser: true });
    let date = moment(placeHolderDate).format("YYYY/MM/DD");
    let pNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    placeholder = date.replace(/[0-9]/g, (d) => pNumbers[Number(d)]);
  }

  return (
    <Box position="relative" zIndex={2}>
      <DatePicker
        dateFormat="yyyy/MM/dd"
        placeholder={placeholder}
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
        onChange={(newDate: Date) => {
          onChange(
            `${newDate.getFullYear()}-${String(newDate.getMonth() + 1).padStart(
              2,
              "0"
            )}-${String(newDate.getDate()).padStart(2, "0")}`
          );
        }}
      ></DatePicker>
    </Box>
  );
};

export default DatePickerInput;
