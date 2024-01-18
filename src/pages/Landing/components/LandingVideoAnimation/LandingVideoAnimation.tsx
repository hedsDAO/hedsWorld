import { Box, Collapse, Text } from "@chakra-ui/react";
import IMAGES from "@/images";
import { videoStyle } from "@/store/constants";

const LandingVideoAnimation = ({ isFirstLanding }: { isFirstLanding: boolean }) => {
  return (
    <Box>
      <Collapse unmountOnExit transition={{ exit: { delay: 0.5 }, enter: { duration: 1.5 } }} in={isFirstLanding}>
        <Text mt={20} left={{ base: "7.5%", lg: "10.5%" }} color="white" position={"absolute"} zIndex={100} fontSize={"7xl"}>
          H
        </Text>
        <video loop autoPlay playsInline muted style={{ ...videoStyle }} src={IMAGES.one} />
      </Collapse>
      <Collapse unmountOnExit transition={{ exit: { delay: 1 }, enter: { duration: 1.5 } }} in={isFirstLanding}>
        <Text mt={20} left={{ base: "32.5%", lg: "37.5%" }} color="white" position={"absolute"} zIndex={100} fontSize={"7xl"}>
          E
        </Text>
        <video loop autoPlay playsInline muted style={{ ...videoStyle, left: "25%" }} src={IMAGES.two} />
      </Collapse>
      <Collapse unmountOnExit transition={{ exit: { delay: 1.5 }, enter: { duration: 1.5 } }} in={isFirstLanding}>
        <Text mt={20} left={{ base: "57.5%", lg: "62.5%" }} color="white" position={"absolute"} zIndex={100} fontSize={"7xl"}>
          D
        </Text>
        <video loop autoPlay playsInline muted style={{ ...videoStyle, left: "50%" }} src={IMAGES.three} />
      </Collapse>
      <Collapse unmountOnExit transition={{ exit: { delay: 2 }, enter: { duration: 1.5 } }} in={isFirstLanding}>
        <Text mt={20} left={{ base: "82.5%", lg: "87.5%" }} color="white" position={"absolute"} zIndex={100} fontSize={"7xl"}>
          S
        </Text>
        <video loop autoPlay playsInline muted style={{ ...videoStyle, left: "75%" }} src={IMAGES.four} />
      </Collapse>
    </Box>
  );
};

export default LandingVideoAnimation;
