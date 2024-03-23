import { FadeProps } from "@chakra-ui/react";
import { BoxProps } from "@chakra-ui/react";
import { SlideFadeProps } from "@chakra-ui/react";
import { TextProps } from "@chakra-ui/react";

export const $fadeStyle0: FadeProps = {
  transition: {
    enter: {
      delay: 0.5,
      duration: 1,
    },
    exit: {
      delay: 0.25,
      duration: 0.5,
    },
  },
};

export const $boxStyle1: BoxProps = {
  pointerEvents: "auto",
  cursor: "pointer",
  maxH: "50vh",
  minW: "100vw",
  objectFit: "cover",
};

export const $slideFadeStyle2: SlideFadeProps = {
  transition: {
    enter: {
      delay: 1.5,
      duration: 1.5,
    },
    exit: {
      delay: 0.5,
      duration: 0.75,
    },
  },
};

export const $boxStyle3: BoxProps = {
  w: "fit-content",
  mt: -12,
  bg: "blackAlpha.600",
  fontFamily: "Helvetica",
  rounded: "none",
  pt: "4.5px",
  pb: "5px",
  px: 3,
};

export const $textStyle4: TextProps = {
  fontSize: "xs",
  fontWeight: "semibold",
  fontFamily: "open",
  color: "white",
};
