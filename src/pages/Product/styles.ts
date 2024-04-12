import { StackProps } from "@chakra-ui/react";

export const $stackStyles: StackProps = {
  overflowX: "hidden",
  justifyContent: "start",
  mb: { base: 20, lg: 0 },
  py: { base: 6, lg: 24 },
  px: { base: 2, lg: 0 },
  maxW: "5xl",
  mx: "auto",
};

export const $gridStyles = {
  alignItems: "stretch",
  gap: { base: 2, lg: 8 },
  py: { base: 0, lg: 0 },
  px: { base: 2, lg: 0.5 },
  columns: 9,
};

export const $gridItemStyles = {
  colSpan: { base: 9, lg: 5 },
  gap: 1,
  columns: { base: 3, lg: 4 },

}

export const $gridItemStyles2 = {
  colSpan: { base: 9, lg: 4 },
  mt: { base: 16, lg: 0 },
}