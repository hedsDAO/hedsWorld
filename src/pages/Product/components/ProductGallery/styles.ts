import { BoxProps, ImageProps, SimpleGridProps } from "@chakra-ui/react";

export const $boxStyles: BoxProps = {
  w: "100%",
  maxH: { base: "65vh", lg: "100%" },
  minW: { base: "91.5vw", lg: "32rem" },
  mx: { base: "auto", lg: "0" },
  borderRadius: "sm",
};

export const $boxStyles2: BoxProps = {
  position: "absolute",
  mixBlendMode: "difference",
};

export const $textStyles = {
  fontFamily: "inter",
  letterSpacing: "widest",
  fontSize: { base: "9px", lg: "2xs" },
  textColor: "white",
  pt: 1.5,
  ml: { base: 2, lg: 2.5 },
};

export const $imageStyles: ImageProps = {
  aspectRatio: 1,
  objectFit: "cover",
};

export const $simpleGridStyles: SimpleGridProps = {
  mt: {base: 5, lg:2},
  mb: 2,
  gap: 1,
  columns: { base: 4, lg: 3 },
};

export const $gridItemStyles = {
  colSpan: 1,
};
