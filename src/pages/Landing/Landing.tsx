import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Dispatch, store } from "@/store/store";
import { Stack } from "@chakra-ui/react";
import * as styles from "@/pages/Landing/styles";
import LandingNavigation from "./components/LandingNavigation/LandingNavigation";
import LandingBackgroundVideo from "./components/LandingBackgroundVideo/LandingBackgroundVideo";
import LandingText from "./components/LandingText/LandingText";

/**
 * @name Landing
 * @description
 * @returns {JSX.Element} Landing component.
 */

const Landing = () => {
  const dispatch = useDispatch<Dispatch>();
  const isUnloading = useSelector(store.select.globalModel.selectIsUnloading);
  const navigate = useNavigate();

  return (
    <Stack {...styles.$stackStyle0}>
      <LandingBackgroundVideo />
      <LandingNavigation />
      <LandingText />
    </Stack>
  );
};
export default Landing;
