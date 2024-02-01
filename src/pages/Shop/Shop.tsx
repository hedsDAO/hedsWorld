import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, store } from "@/store/store";
import { Box, Collapse, Fade, Flex, GridItem, Image, SimpleGrid, SlideFade, Stack, Text } from "@chakra-ui/react";
import IMAGES from "@/images";
import { CatalogItem } from "@/store/types";
const Landing = () => {
  const dispatch = useDispatch<Dispatch>();
  const allProducts = useSelector(store.select.landingModel.selectAllProducts);
  const isFirstLanding = useSelector(store.select.landingModel.selectIsFirstLanding);
  const showLanding = useSelector(store.select.landingModel.selectShowLanding);

  useEffect(() => {
    if (isFirstLanding) dispatch.landingModel.handleLanding();
    if (!allProducts) dispatch.landingModel.getProducts();
  }, []);

  return (
    <Stack>
      <Fade transition={{ enter: { delay: 1, duration: 1 } }} in={true}>
        <Box loop autoPlay muted playsInline controls={false} maxH="50vh" as="video" src={IMAGES.shirts_2} minW={"100vw"} objectFit={"cover"} />
      </Fade>
      <SlideFade transition={{ enter: { delay: 1.5, duration: 1.5 } }} in={true}>
        <Box w="fit-content" mt={-12} bg="blackAlpha.600" fontFamily={'Helvetica'} rounded="none" pt={"4.5px"} pb={"5px"} px={3}>
          <Text fontSize={"xs"} fontWeight={'semibold'} fontFamily={"open"} color="white">
            hed dot tee
          </Text>
        </Box>
      </SlideFade>
      <Fade transition={{ enter: { delay: 0.5, duration: 1 } }} in={true}>
        <Flex alignItems={"center"} gap={1.5} my={1} minW="100vw">
          <Text pl={4} fontSize={"2xs"}>
            all products
          </Text>
          <Text as="i" className="fal fa-chevron-right" fontSize={"8px"} />
        </Flex>
      </Fade>
      <SimpleGrid px={6} columns={{ base: 1, lg: 8 }} gap={4} p={4}>
        {allProducts?.map((product: CatalogItem, index: number) => {
          return (
            <SlideFade transition={{ enter: { delay: index + 1 / 16, duration: 0.5 } }} in={true}>
              <GridItem as={Stack} gap={2} border="1px" borderColor="blackAlpha.100" p={2.5} colSpan={1} key={product.id}>
                <Image src={product.productImages?.[0]} />
                <Stack mt={1.5}>
                  <Text fontSize={"2xs"}>{product.itemData?.name}</Text>
                </Stack>
              </GridItem>
            </SlideFade>
          );
        })}
        {new Array(6).fill(null)?.map((_, index: number) => {
          return (
            <SlideFade transition={{ enter: { delay: 2 } }} in={true}>
              <GridItem display={{ base: "none", lg: "flex" }} as={Stack} gap={2} border="1px" borderColor="blackAlpha.100" p={2.5} colSpan={1} key={index}>
                <Box bg="transparent" w="100%" aspectRatio={1} />
                <Stack mt="2" />
              </GridItem>
            </SlideFade>
          );
        })}
      </SimpleGrid>
    </Stack>
  );
};
export default Landing;
