import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Dispatch, store } from "@/store/store";
import { Box, Fade } from "@chakra-ui/react";
import * as constants from "@/pages/Landing/components/LandingBackgroundVideo/constants";
import * as styles from "@/pages/Landing/components/LandingBackgroundVideo/styles";
import IMAGES from "@/images";

/**
 * @name LandingBackgroundVideo
 * @description displays the landing background video.
 * @returns {JSX.Element} LandingBackgroundVideo component
 */

const LandingBackgroundVideo = () => {
  const dispatch = useDispatch<Dispatch>();
  const navigate = useNavigate();
  const isUnloading = useSelector(store.select.globalModel.selectIsUnloading);

  return (
    <Fade {...styles.$fadeStyle1} in={true && !isUnloading}>
      <Box
        {...styles.$boxStyles}
        onClick={() => dispatch.globalModel.handleUnload([isUnloading, () => navigate(constants.shopURL)])}
        style={{ ...styles.$videoStyles }}
        as={constants.videoHTML}
        loop
        playsInline
        autoPlay
        muted
        src={IMAGES.shirts_2}
      />
    </Fade>
  );
};

export default LandingBackgroundVideo;
