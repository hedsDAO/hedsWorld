import { Stack } from "@chakra-ui/react";
import LandingNavigation from "@/pages/Landing/components/LandingNavigation/LandingNavigation";
import LandingBackgroundVideo from "@/pages/Landing/components/LandingBackgroundVideo/LandingBackgroundVideo";
import LandingText from "@/pages/Landing/components/LandingText/LandingText";
import * as styles from "@/pages/Landing/styles";

/**
 * @name Landing
 * @description displays the landing page.
 * @returns {JSX.Element} Landing component.
 */

const Landing = () => {
  return (
    <Stack {...styles.$stackStyle0}>
      <LandingBackgroundVideo />
      <LandingNavigation />
      <LandingText />
    </Stack>
  );
};
export default Landing;
