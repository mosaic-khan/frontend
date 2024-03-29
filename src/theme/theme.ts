import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import colors from "./color";

const config: ThemeConfig = {
  initialColorMode: "light",
};

const theme = extendTheme({ config, colors: colors });

export default theme;
