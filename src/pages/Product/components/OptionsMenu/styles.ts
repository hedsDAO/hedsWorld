import { MenuButtonProps } from "@chakra-ui/react";

export const $menuStyles = {
  size: "xs",
};

export const $memuButtonStyles: any = {
  _hover: { bg: "black", color: "white" },
  _active: { bg: "black", color: "white" },
  border: "1px solid",
  size: "xs",
  rounded: "none",
  bg: "transparent",
  textTransform: "uppercase",
};

export const $iconStyles = {
  className: "fas fa-chevron-down",
};
export const $menuListStyles = {
  borderTop: "1px solid",
  borderX: "1px solid",
  py: 0,
  rounded: "none",
  bg: "white",
};

export const $menuItem = {
  fontSize: "sm",
  py: 1,
  borderBottom: "1px solid",
  _focus: { bg: "black", color: "white" },
  _hover: { bg: "black", color: "white" },
};
