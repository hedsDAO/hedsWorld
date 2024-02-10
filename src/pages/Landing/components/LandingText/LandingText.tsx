import { Dispatch, store } from "@/store/store";
import { Fade, Flex, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as constants from "./constants";
import * as styles from "./styles";

const LandingText = () => {
  const isUnloading = useSelector(store.select.globalModel.selectIsUnloading);
  const navigate = useNavigate();
  const dispatch = useDispatch<Dispatch>();
  return (
    <Flex {...styles.$flexStyle0} onClick={() => dispatch.globalModel.handleUnload([isUnloading, () => navigate(constants.teeURL)])}>
      <Fade {...styles.$fadeStyle1} in={true && !isUnloading}>
        <Text {...styles.$textStyle2}>{constants.text1}</Text>
      </Fade>
    </Flex>
  );
};

export default LandingText;
