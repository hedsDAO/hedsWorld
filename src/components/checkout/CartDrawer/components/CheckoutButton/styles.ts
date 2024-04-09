import { ButtonProps, TextProps } from "@chakra-ui/react";

export const $buttonStyles: ButtonProps = {
  size: "sm",
  bg: "white",
  color: "black",
  border: "1px solid",
  borderColor: "black",
  _hover: { bg: "black", color: "white" },
  transition: "0.2s all ease-in-out",
  rounded: "full",
  minW: "100%",
};

export const $fontStyles: TextProps = {
  fontFamily: "hanken",
  fontSize: "xs",
  fontWeight: 600,
  textTransform: "uppercase",
};
