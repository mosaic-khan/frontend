import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
};

const theme = extendTheme
({ 
  fonts:{
    heading: `Vazir`,
    body:`Vazir`
    },
 });

export default theme;
