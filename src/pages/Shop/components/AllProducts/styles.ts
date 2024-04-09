import { ImageProps, TextProps } from "@chakra-ui/react";

export const $gridStyles = {
  pt: 0,
  pb: 20,
  px: 4,
  gap: 4,
  columns: { base: 1, lg: 4 },
};

export const $gridItemStyles = {
  gap: 2,
};

export const $imageStyles: ImageProps = {
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
  objectFit: "cover",
  aspectRatio: 1,
};

export const $flexStyles = {
  gap: 2,
  alignItems: "center",
};

export const $iconStyles = {
  fontSize: "3xl",
  className: "fa-sharp fa-solid fa-angle-right",
};

export const $textStyles: TextProps = {
  fontFamily: "hanken",
  textTransform: "uppercase",
  pl: 1,
  fontWeight: 500,
  fontSize: "3xl",
  isTruncated: true,
};
