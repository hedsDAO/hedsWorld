import IMAGES from "@/images";
import { store } from "@/store/store";
import { Box, Button, Collapse, Flex, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const videoStyle: any = {
  objectFit: "cover",
  height: "50vh",
  width: "100vw",
};

const LandingPageLinks = () => {
  const isFirstLanding = useSelector(store.select.landingModel.selectIsFirstLanding);
  const { isOpen, onOpen } = useDisclosure();

  useEffect(() => {
    if (isFirstLanding) {
      setTimeout(() => onOpen(), 2000);
    } else onOpen();
  }, [isFirstLanding]);
  return (
    <Stack gap={0} minW="100vw" minH="200vh">
      <Collapse transition={isFirstLanding ? { exit: { delay: 0.5 }, enter: { duration: 1.5 } } : {}} unmountOnExit in={isOpen}>
        <Stack position={"relative"}>
          <Flex alignItems={"center"} gap={4} ml={10} mt={"22vh"} position="absolute">
            <Text fontSize={"lg"} fontFamily={"space"} color="white">
              heds.world
            </Text>
            <Button as={Link} to={"/shop"} size="sm" rounded="none" color="white" bg="black" _hover={{ bg: "black" }}>
              SHOP
            </Button>
          </Flex>
          <video loop autoPlay playsInline muted src={IMAGES.one} style={{ ...videoStyle }} />
        </Stack>
      </Collapse>
      <Collapse transition={isFirstLanding ? { exit: { delay: 1.5 }, enter: { duration: 1.5 } } : {}} unmountOnExit in={isOpen}>
        <Flex alignItems={"center"} gap={4} ml={10} mt={"24vh"} position="absolute">
          <Text fontSize={"lg"} fontFamily={"space"} color="white">
            heds.space
          </Text>
          <Button
            as={"a"}
            href={"https://heds.space"}
            target="_blank"
            size="sm"
            rounded="none"
            color="white"
            bg="black"
            _hover={{ bg: "black" }}
          >
            EVENTS
          </Button>
        </Flex>
        <video loop autoPlay playsInline muted src={IMAGES.three} style={{ ...videoStyle }} />
      </Collapse>
      <Collapse transition={isFirstLanding ? { exit: { delay: 1 }, enter: { duration: 1.5 } } : {}} unmountOnExit in={isOpen}>
        <Flex alignItems={"center"} gap={4} ml={10} mt={"24vh"} position="absolute">
          <Text fontSize={"lg"} fontFamily={"space"} color="white">
            heds.app
          </Text>
          <Button
            as={"a"}
            href={"https://heds.app"}
            target="_blank"
            size="sm"
            rounded="none"
            color="white"
            bg="black"
            _hover={{ bg: "black" }}
          >
            LISTEN
          </Button>
        </Flex>
        <video loop autoPlay playsInline muted src={IMAGES.two} style={{ ...videoStyle }} />
      </Collapse>
      <Collapse transition={isFirstLanding ? { exit: { delay: 2 }, enter: { duration: 1.5 } } : {}} unmountOnExit in={isOpen}>
        <Flex alignItems={"center"} gap={4} ml={10} mt={"24vh"} position="absolute">
          <Text fontSize={"lg"} fontFamily={"space"} color="white">
            heds.vote
          </Text>
          <Button
            as={"a"}
            href={"https://heds.vote"}
            target="_blank"
            size="sm"
            rounded="none"
            color="white"
            bg="black"
            _hover={{ bg: "black" }}
          >
            VOTE
          </Button>
        </Flex>
        <video loop autoPlay playsInline muted src={IMAGES.four} style={{ ...videoStyle }} />
      </Collapse>
    </Stack>
  );
};

export default LandingPageLinks;
