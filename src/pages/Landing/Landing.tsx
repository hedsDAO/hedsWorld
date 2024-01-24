import IMAGES from "@/images";
import { Link } from "react-router-dom";
import { Box, Button, Flex, Image, Stack } from "@chakra-ui/react";
import * as constants from "@/pages/Landing/constants";
import * as styles from "@/pages/Landing/styles";

/**
 * @name Landing
 * @description
 * @returns {JSX.Element} Landing component.
 */

const Landing = () => {
  return (
    <Stack {...styles.$stackStyle0}>
      <Flex {...styles.$flexStyle1}>
        <Button as={Link} to={constants.shopURL} {...styles.$buttonStyle2}>
          {constants.text1}
        </Button>
        <Button as={constants.aHTML} target={constants.target} href={constants.eventsURL} {...styles.$buttonStyle3}>
          {constants.text2}
        </Button>
      </Flex>
      <Stack {...styles.$stackStyle4}>
        <Image src={IMAGES.logo} {...styles.$imageStyle5} />
        <Box {...styles.$boxStyle6}>
          <Box style={{ ...styles.$videoStyles }} as={constants.videoHTML} playsInline autoPlay muted src={IMAGES.store} />
        </Box>
        <Stack {...styles.$stackButtonStyles}>
          <Button as={Link} to={constants.shopURL} {...styles.$buttonStyle2}>
            {constants.text1}
          </Button>
          <Button as={constants.aHTML} target={constants.target} href={constants.eventsURL} {...styles.$buttonStyle3}>
            {constants.text2}
          </Button>
          <Button as={constants.aHTML} target={constants.target} href={constants.listenURL} {...styles.$buttonStyle8}>
            {constants.text3}
          </Button>
          <Button as={constants.aHTML} target={constants.target} href={constants.voteURL} {...styles.$buttonStyle9}>
            {constants.text4}
          </Button>
        </Stack>
      </Stack>
      <Flex {...styles.$flexStyle7}>
        <Button as={constants.aHTML} target={constants.target} href={constants.listenURL} {...styles.$buttonStyle8}>
          {constants.text3}
        </Button>
        <Button as={constants.aHTML} target={constants.target} href={constants.voteURL} {...styles.$buttonStyle9}>
          {constants.text4}
        </Button>
      </Flex>
    </Stack>
  );
};
export default Landing;
