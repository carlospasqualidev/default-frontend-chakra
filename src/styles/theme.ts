import { extendTheme } from "@chakra-ui/react";

// example theme
export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#f8f8f8", //backgroundColor
      },
    },
  },
  fonts: {
    heading: "DM Sans",
    body: "DM Sans",
  },
});
