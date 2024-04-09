import { Dispatch, store } from "@/store/store";
import { Fade, Flex, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as constants from "@/pages/Landing/components/LandingText/constants";
import * as styles from "@/pages/Landing/components/LandingText/styles";

/**
 * @name LandingText
 * @description displays the landing text.
 * @returns {JSX.Element} LandingText component
 */

const LandingText = () => {
  const dispatch = useDispatch<Dispatch>();
  const isUnloading = useSelector(store.select.globalModel.selectIsUnloading);
  const navigate = useNavigate();

  return (
    <Flex {...styles.$flexStyle0} onClick={() => dispatch.globalModel.handleUnload([isUnloading, () => navigate(constants.shopURL)])}>
      <Fade {...styles.$fadeStyle1} in={true && !isUnloading}>
        <Text {...styles.$textStyle2}>{constants.text1}</Text>
      </Fade>
    </Flex>
  );
};

export default LandingText;
