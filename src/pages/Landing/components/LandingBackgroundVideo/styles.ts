export const $videoStyles: any = {
  objectFit: "cover",
  height: "100vh",
  overflow: "hidden",
  maxW: "100vw",
  minWidth: "100%",
  zIndex: 999,
  position: "absolute",
};

export const $boxStyles = {
  _before: {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%)",
  },
  mt: { base: 12, lg: 0 },
};

export const $fadeStyle1 = {
  style: { minWidth: "100vw" },
  transition: { enter: { delay: 4, duration: 2.5 }, exit: { delay: 0.5, duration: 0.75 } },
};
