import { SimpleGridProps } from "@chakra-ui/react";

export const $transitionAnimationProps = { exit: { delay: 3.5 }, enter: { duration: 2 } };

export const $simpleGridStyles: SimpleGridProps = {
  minH: {lg:"40rem"},
  pb: {base: 10, lg: 0},
  // bg: "heds.white100",
  columns: 7,
  minW: "100vw",
  alignItems: "center",
  overflowY: "hidden",
  maxH: "100vh",
  gap: 0,
};
