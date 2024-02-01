import IMAGES from "@/images";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Fade, Flex, Image, Skeleton, Stack, Text, useBoolean } from "@chakra-ui/react";
import * as constants from "@/pages/Landing/constants";
import * as styles from "@/pages/Landing/styles";
import { useEffect } from "react";
import { motion } from "framer-motion";

/**
 * @name Landing
 * @description
 * @returns {JSX.Element} Landing component.
 */

const Landing = () => {
  const navigate = useNavigate();
  const [hasVideoLoaded, setHasVideoLoaded] = useBoolean();
  const [isUnloading, setIsUnloading] = useBoolean();
  const [isTitleIn, setIsTitleIn] = useBoolean();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTitleIn.on();
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const handleUnload = () => {
    if (isUnloading) return;
    else {
      setIsUnloading.on();
      setHasVideoLoaded.off();
      setTimeout(() => {
        navigate(constants.shopURL);
      }, 2000);
    }

    return;
  };

  return (
    <Stack {...styles.$stackStyle0}>
      <Fade style={{ minWidth: "100vw" }} transition={{ enter: { delay: 4, duration: 2.5 }, exit: { delay: 0.5, duration: 0.75 } }} in={true && !isUnloading}>
        <Box
          _before={{
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%)",
          }}
          onClick={() => handleUnload()}
          mt={{ base: 12, lg: 0 }}
          style={{ ...styles.$videoStyles }}
          as={constants.videoHTML}
          loop
          playsInline
          autoPlay
          onPlay={setHasVideoLoaded.on}
          muted
          src={IMAGES.shirts_2}
        />
      </Fade>
      <Flex mixBlendMode={"difference"} alignSelf={"start"} py={2.5} pl={{ lg: 5 }} alignItems={"center"} gap={6} minW="100vw" zIndex={1000} justifyContent={{ base: "center", lg: "start" }}>
        <Fade transition={{ enter: { delay: 0.1, duration: 0.75 }, exit: { delay: 0.75, duration: 0.75 } }} in={true && !isUnloading}>
          <Text cursor={"pointer"} pointerEvents={"auto"} onClick={() => handleUnload()} fontWeight={"semibold"} fontSize={"sm"} fontFamily={"karla"} color="whiteAlpha.900">
            shop
          </Text>
        </Fade>
        <Fade transition={{ enter: { delay: 0.25, duration: 0.75 }, exit: { delay: 0.6, duration: 0.75 } }} in={true && !isUnloading}>
          <Text as={constants.aHTML} href={constants.eventsURL} target={constants.target} fontWeight={"semibold"} fontSize={"sm"} fontFamily={"karla"} color="whiteAlpha.900">
            events
          </Text>
        </Fade>
        <Fade transition={{ enter: { delay: 0.5, duration: 0.75 }, exit: { delay: 0.45, duration: 0.75 } }} in={true && !isUnloading}>
          <Text as={constants.aHTML} href={constants.listenURL} target={constants.target} fontWeight={"semibold"} fontSize={"sm"} fontFamily={"karla"} color="whiteAlpha.900">
            listen
          </Text>
        </Fade>
        <Fade transition={{ enter: { delay: 0.65, duration: 0.75 }, exit: { delay: 0.35, duration: 0.75 } }} in={true && !isUnloading}>
          <Text as={constants.aHTML} href={constants.voteURL} target={constants.target} fontWeight={"semibold"} fontSize={"sm"} fontFamily={"karla"} color="whiteAlpha.900">
            vote
          </Text>
        </Fade>
      </Flex>
      <Flex onClick={() => handleUnload()} mixBlendMode={"difference"} mt={{ base: "15%", lg: "15%" }} alignSelf={"center"} justifyContent={"center"} px={6} py={1} minW="100vw" zIndex={1000}>
        <Fade transition={{ enter: { delay: 1.75, duration: 1 }, exit: { delay: 0, duration: 0.5 } }} in={true && !isUnloading}>
          <Text
            lineHeight={0.95}
            maxW={{ base: "3ch", lg: "100%" }}
            textAlign={{ base: "center", lg: "left" }}
            pointerEvents={"auto"}
            cursor={"pointer"}
            fontSize={{ base: 180, lg: 200 }}
            color="white"
            fontWeight={"500"}
            fontFamily={"Helvetica"}
          >
            hed dot tee
          </Text>
        </Fade>
      </Flex>
    </Stack>
  );
};
export default Landing;
