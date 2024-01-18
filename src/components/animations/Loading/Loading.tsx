import IMAGES from "@/images";
import { ScaleFade, Box, Image, keyframes } from "@chakra-ui/react";
import { motion } from "framer-motion";

const animationKeyframes = keyframes`
  0% { transform: scale(0.25) rotate(0); border-radius: 20%; }
  25% { transform: scale(0.5) rotate(0); border-radius: 20%; }
  50% { transform: scale(0.5) rotate(360deg); border-radius: 50%; }
  75% { transform: scale(0.5) rotate(360deg); border-radius: 50%; }
  100% { transform: scale(0.25) rotate(0); border-radius: 20%; }
`;

const animation = `${animationKeyframes} 4s ease-in-out infinite`;

const Loading = ({ isLoading }: { isLoading?: boolean }) => {
  return (
    <ScaleFade in={isLoading || true}>
      <Box animation={animation} as={motion.div}>
        <Image filter={"grayscale(1)"} maxH="100vh" maxW="100vw" objectFit={"contain"} src={IMAGES.globe} />
      </Box>
    </ScaleFade>
  );
};

export default Loading;