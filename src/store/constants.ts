import { keyframes } from "@emotion/react";

export const animationKeyframes = keyframes`
  0% { transform: scale(1) rotate(0); border-radius: 20%; filter: saturate(1); }
  25% { transform: scale(1.01) rotate(0); border-radius: 20%; filter: saturate(0);  }
  50% { transform: scale(1) rotate(0); border-radius: 50%; filter: saturate(1);  }
  75% { transform: scale(1.01) rotate(0); border-radius: 50%; filter: saturate(0);  }
  100% { transform: scale(1) rotate(0); border-radius: 20%; filter: saturate(1);  }
`;

export const animationKeyframes2 = keyframes`
  0% { width: 25vw }
  25% { width: 45vw }
  50% { width: 60vw }
  75% { width: 80vw }
  100% { width: 100vw }
`;

export const animation = `${animationKeyframes} 7s ease-in-out infinite`;
export const animation2 = `${animationKeyframes2} 7s ease-in-out infinite`;

export const videoStyle: any = {
  objectFit: "cover",
  position: "absolute",
  top: "0",
  left: "0",
  height: "100vh",
};

export const videoStyle2: any = {
  objectFit: "cover",
  filter: "saturate(0.5)",
  height: "100vh",
};

export const LOCATION_ID = "LX5XAS9ECX0P7";

export const HELVETICA_STYLE = `
  @font-face {
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(/public/fonts/helvetica.ttf) format('ttf');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
`;
