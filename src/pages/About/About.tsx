import { store } from "@/store/store";
import { Fade, Stack, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const About = () => {
  const isUnloading = useSelector(store.select.globalModel.selectIsUnloading);
  return (
    <Stack justifyContent={"center"} alignItems={"center"} minW="100vw" minH="80vh">
      <Fade transition={{ enter: { delay: 0.5, duration: 0.5 }, exit: { delay: 0.5, duration: 0.75 } }} in={true && !isUnloading}>
        <Text fontFamily={"Helvetica"} fontSize="7xl" color="blackAlpha.600">
          what is heds.world?
        </Text>
      </Fade>
      <Fade transition={{ enter: { delay: 2.5, duration: 0.5 }, exit: { delay: 0.5, duration: 0.75 } }} in={true && !isUnloading}>
        <Text fontFamily={"Helvetica"} color="blackAlpha.700" fontSize="sm">{`it's hard to explain for all the right reasons`}</Text>
      </Fade>
    </Stack>
  );
};

export default About;
