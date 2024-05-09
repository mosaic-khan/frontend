import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import colors from "./color";

const config: ThemeConfig = {
  initialColorMode: "light",
};

const theme = extendTheme({
  config,
  colors: colors,
  fonts: {
    heading: `Vazirmatn`,
    body: `Vazirmatn`,
  },
});

export default theme;
