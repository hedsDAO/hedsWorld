import { TextProps } from "@chakra-ui/react";

export const $fadeTransition = (index: number) => ({ enter: { delay: (index + 1) / 10 }, exit: { delay: (index + 1) / 10 } });

export const $fadeStyle = {
  display: "flex",
};

export const $flexStyles = {
  gap: { base: 4, lg: 6 },
  alignItems: "center",
  minW: "100vw",
  py: "7.5px",
  pl: 4,
};

export const $navLinkStyles = (active: boolean): TextProps => ({
  cursor: "pointer",
  pointerEvents: "auto",
  _hover: { color: "blackAlpha.900" },
  transition: "0.25s all ease-in-out",
  fontWeight: "semibold",
  fontSize: { base: "xs", lg: "sm" },
  fontFamily: "karla",
  color: active ? "blackAlpha.900" : "blackAlpha.600",
});
