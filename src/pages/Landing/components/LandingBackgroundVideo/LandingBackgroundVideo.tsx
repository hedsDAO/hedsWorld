import IMAGES from "@/images";
import { Dispatch, store } from "@/store/store";
import { Box, Fade } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as constants from "./constants";
import * as styles from "./styles";

const LandingBackgroundVideo = () => {
  const navigate = useNavigate();
  const isUnloading = useSelector(store.select.globalModel.selectIsUnloading);
  const dispatch = useDispatch<Dispatch>();
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
