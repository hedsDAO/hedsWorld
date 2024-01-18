import IMAGES from "@/images";
import { store } from "@/store/store";
import { GridItem, Flex, Stack, Skeleton, Image, useBoolean, Collapse } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const FeaturedProductGallery = () => {
  const featuredProduct = useSelector(store.select.landingModel.selectFeaturedProduct);
  const [hasImageLoaded, setHasImageLoaded] = useBoolean();

  return (
    <GridItem as={Flex} direction={{ base: "column", lg: "row" }} colSpan={{ base: 7, lg: 5 }}>
      <Stack maxH="80vh" minW="full " px={4} py={8}>
        <Skeleton minW="full" startColor="blackAlpha.300" endColor="blackAlpha.100" isLoaded={hasImageLoaded}>
          <Collapse transition={{ enter: { delay: 5 } }} in={hasImageLoaded}>
            <Image onLoad={() => setHasImageLoaded.on()} objectFit={"contain"} src={IMAGES.rob} minW="full" />
          </Collapse>
        </Skeleton>
      </Stack>
    </GridItem>
  );
};

export default FeaturedProductGallery;
