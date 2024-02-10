import { SlideFadeProps } from "@chakra-ui/react";
import { GridItemProps } from "@chakra-ui/react";
import { BoxProps } from "@chakra-ui/react";
import { StackProps } from "@chakra-ui/react";

export const $slideFadeStyle0: SlideFadeProps = {
  transition: {
    enter: {
      delay: 2,
    },
    exit: {
      delay: 0.5,
      duration: 0.75,
    },
  },
};

export const $gridItemStyle1: GridItemProps = {
  minH: "100%",
  display: {
    base: "none",
    lg: "flex",
  },
  gap: 2,
  border: "1px",
  borderColor: "blackAlpha.100",
  p: 2.5,
  colSpan: 1,
};

export const $boxStyle2: BoxProps = {
  bg: "transparent",
  w: "100%",
  aspectRatio: 1,
};

export const $stackStyle3: StackProps = {
  mt: "2",
};
