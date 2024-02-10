import * as constants from "./constants";
import * as styles from "./styles";
import IMAGES from "@/images";
import { Dispatch, store } from "@/store/store";
import { Box, Fade, SlideFade, Text } from "@chakra-ui/react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const FeaturedProductHeader = () => {
  const dispatch = useDispatch<Dispatch>();
  const navigate = useNavigate();
  const isUnloading = useSelector(store.select.globalModel.selectIsUnloading);
  return (
    <Fragment>
      <Fade
        {...styles.$fadeStyle0}
        onClick={() => {
          dispatch.globalModel.handleUnload([isUnloading, () => navigate("/product/WLLLGVR6NIGUJGJOZ7M2LCF6")]);
        }}
        in={true && !isUnloading}
      >
        <Box {...styles.$boxStyle1} loop autoPlay muted playsInline as="video" src={IMAGES.shirts_2} />
      </Fade>
      <SlideFade {...styles.$slideFadeStyle2} in={true && !isUnloading}>
        <Box {...styles.$boxStyle3}>
          <Text {...styles.$textStyle4}>{constants.text1}</Text>
        </Box>
      </SlideFade>
    </Fragment>
  );
};
export default FeaturedProductHeader;
