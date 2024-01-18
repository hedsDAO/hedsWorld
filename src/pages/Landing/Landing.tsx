import LandingVideoAnimation from "@/pages/Landing/components/LandingVideoAnimation/LandingVideoAnimation";
import { Dispatch, store } from "@/store/store";
import { Stack } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import LandingPageLinks from "./components/LandingPageLinks/LandingPageLinks";
import { useEffect } from "react";

const Landing = () => {
  const dispatch = useDispatch<Dispatch>();
  const isFirstLanding = useSelector(store.select.landingModel.selectIsFirstLanding);
  useEffect(() => {
    if (isFirstLanding) dispatch.landingModel.handleLanding();
  }, []);
  return (
    <Stack gap={0}>
      <LandingVideoAnimation isFirstLanding={isFirstLanding} />
      <LandingPageLinks />
    </Stack>
  );
};

export default Landing;
