import { extendTheme, position } from "@chakra-ui/react";
export const defaultTheme = extendTheme({
  colors: {
    heds: {
      nuBlack: "black",
      white50: "#ffffff",
      white100: "#f0f0f0",
      white200: "#e1e1e1",
    },
  },
  fonts: {
    space: "'Space Mono', sans-serif",
    inter: "'Inter', sans-serif",
    karla: "'Karla', sans-serif",
    poppins: "'Poppins', sans-serif",
    open: "'Open Sans Variable', sans-serif",
    lora: "'Lora Variable', serif",
  },
  styles: {
    global: (props: any) => ({
      "html, body": {
        height: "100%",
        minHeight: "100vh",
        minWidth: "100vw",
        overscrollBehavior: "none !important",
      },
      '.chakra-input[type="search"]::-webkit-search-cancel-button': {
        display: "none",
      },
      ".highlight": {
        ".ais-Highlight-highlighted": {
          backgroundColor: "heds.bg3",
          color: "white",
          fontStyle: "normal",
        },
      },
      "video::-webkit-media-controls": {
        position: "absolute !important",
        top: "-9999px",
      },
    }),
  },
});
