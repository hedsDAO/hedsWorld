import IMAGES from "@/images";
import { Flex, Image, Stack, Text } from "@chakra-ui/react";
import * as constants from "./constants";

const Footer = () => {
  return (
    <Flex alignItems={"center"} justifyContent={"space-between"} pb={5} pt={{ base: 10, lg: 20 }} minH="8vh" maxW="100vw" px={5}>
      <Flex alignItems={"center"} gap={5}>
        <Image ml={2} src={IMAGES.hedline_w_i} boxSize="2.5rem" />
        <Stack gap={0}>
          <Text color="blackAlpha.600" fontSize={"2xs"}>
            {constants.COPYRIGHT}
          </Text>
          <Flex gap={1}>
            <Text color="blackAlpha.500" fontSize={"2xs"}>
              {constants.TERMS}
            </Text>
            <Text color="blackAlpha.500" fontSize={"2xs"}>
              {"|"}
            </Text>
            <Text color="blackAlpha.500" fontSize={"2xs"}>
              {constants.PRIVACY}
            </Text>
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
  );
};

export default Footer;
