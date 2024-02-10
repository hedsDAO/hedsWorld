import { Flex, Fade, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, store } from "@/store/store";
import { useNavigate } from "react-router-dom";
import * as constants from "./constants";
import * as styles from "./styles";

const LandingNavigation = () => {
  const dispatch = useDispatch<Dispatch>();
  const navigate = useNavigate();
  const isUnloading = useSelector(store.select.globalModel.selectIsUnloading);
  return (
    <Flex {...styles.$flexStyle0}>
      <Fade {...styles.$fadeStyle1} in={true && !isUnloading}>
        <Text {...styles.$textStyle2} onClick={() => dispatch.globalModel.handleUnload([isUnloading, () => navigate(constants.shopURL)])}>
          {constants.text1}
        </Text>
      </Fade>
      <Fade {...styles.$fadeStyle3} in={true && !isUnloading}>
        <Text {...styles.$textStyle4} href={constants.eventsURL} target={constants.target} as={constants.aHTML}>
          {constants.text2}
        </Text>
      </Fade>
      <Fade {...styles.$fadeStyle5} in={true && !isUnloading}>
        <Text href={constants.listenURL} target={constants.target} {...styles.$textStyle6} as={constants.aHTML}>
          {constants.text3}
        </Text>
      </Fade>
      <Fade {...styles.$fadeStyle7} in={true && !isUnloading}>
        <Text href={constants.voteURL} target={constants.target} {...styles.$textStyle8} as={constants.aHTML}>
          {constants.text4}
        </Text>
      </Fade>
    </Flex>
  );
};
export default LandingNavigation;
