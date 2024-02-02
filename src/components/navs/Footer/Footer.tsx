import IMAGES from "@/images";
import { Fade, Flex, Image, SlideFade, Stack, Text } from "@chakra-ui/react";
import * as constants from "./constants";
import { useSelector } from "react-redux";
import { store } from "@/store/store";
import { useRef } from "react";

const Footer = () => {
  const termsRef = useRef<HTMLAnchorElement>(null);
  const privacyRef = useRef<HTMLAnchorElement>(null);
  const isUnloading = useSelector(store.select.globalModel.selectIsUnloading);

  return (
    <SlideFade transition={{ enter: { delay: 1, duration: 0.25 }, exit: { delay: 0.25, duration: 0.25 } }} in={true && !isUnloading}>
      <Flex alignItems={"center"} justifyContent={"space-between"} pb={5} pt={{ base: 10, lg: 20 }} minH="8vh" maxW="100vw" px={5}>
        <Flex alignItems={"center"} gap={5}>
          <Image ml={2} src={IMAGES.hedline_w_i} boxSize={{ base: "2.25rem", lg: "2.5rem" }} />
          <Stack gap={0}>
            <Text color="blackAlpha.600" fontSize={"2xs"}>
              {constants.COPYRIGHT}
            </Text>
            <Flex gap={1}>
              <Text _hover={{ color: "blackAlpha.800" }} transition={'0.35s all ease-in-out'} cursor={"pointer"} pointerEvents={"auto"} onClick={() => termsRef.current?.click()} color="blackAlpha.500" fontSize={"2xs"}>
                {constants.TERMS}
              </Text>
              <Text color="blackAlpha.500" fontSize={"2xs"}>
                {"|"}
              </Text>
              <Text _hover={{ color: "blackAlpha.800" }} transition={'0.35s all ease-in-out'} cursor={"pointer"} pointerEvents={"auto"} onClick={() => privacyRef.current?.click()} color="blackAlpha.500" fontSize={"2xs"}>
                {constants.PRIVACY}
              </Text>
              <a ref={termsRef} href={constants.TERMS_OF_SERVICE} target="_blank" style={{ opacity: "0", position: "absolute", top: -9999 }} />
              <a ref={privacyRef} href={constants.PRIVACY_POLICY} target="_blank" style={{ opacity: "0", position: "absolute", top: -9999 }} />
            </Flex>
          </Stack>
        </Flex>
        <Flex gap={3}>
          <a href={constants.DISCORD} target="_blank">
            <Text as="i" className="fab fa-discord" fontSize={"sm"} color="blackAlpha.500" />
          </a>
          <a href={constants.TWITTER} target="_blank">
            <Text as="i" className="fab fa-twitter" fontSize={"sm"} color="blackAlpha.500" />
          </a>
          <a href={constants.INSTAGRAM} target="_blank">
            <Text as="i" className="fab fa-instagram" fontSize={"sm"} color="blackAlpha.500" />
          </a>
          <Text color="blackAlpha.500" fontSize={"2xs"}></Text>
        </Flex>
      </Flex>
    </SlideFade>
  );
};

export default Footer;
