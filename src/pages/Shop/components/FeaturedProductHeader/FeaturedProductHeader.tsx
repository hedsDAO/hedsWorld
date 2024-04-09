import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Dispatch, store } from "@/store/store";
import { Box, Fade } from "@chakra-ui/react";
import * as constants from "@/pages/Shop/components/FeaturedProductHeader/constants";
import * as styles from "@/pages/Shop/components/FeaturedProductHeader/styles";
import IMAGES from "@/images";

/**
 * @name FeaturedProductHeader
 * @description displays the featured product header.
 * @returns {JSX.Element} FeaturedProductHeader component
 */

const FeaturedProductHeader = () => {
  const dispatch = useDispatch<Dispatch>();
  const navigate = useNavigate();
  const isUnloading = useSelector(store.select.globalModel.selectIsUnloading);
  return (
    <Fade
      in={true && !isUnloading}
      {...styles.$fadeStyle0}
      onClick={() => {
        dispatch.globalModel.handleUnload([isUnloading, () => navigate(constants.link)]);
      }}
    >
      <Box {...styles.$boxStyle1} loop autoPlay muted playsInline as={constants.VIDEO_ELEMENT} src={IMAGES.shirts_2} />
    </Fade>
  );
};
export default FeaturedProductHeader;
