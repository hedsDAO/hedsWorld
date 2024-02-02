import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Fade, Flex, GridItem, Image, SimpleGrid, SlideFade, Stack, Text } from "@chakra-ui/react";
import { Dispatch, store } from "@/store/store";
import { CatalogItem } from "@/store/types";
import IMAGES from "@/images";

const Shop = () => {
  const dispatch = useDispatch<Dispatch>();
  const navigate = useNavigate();
  const isUnloading = useSelector(store.select.globalModel.selectIsUnloading);
  const allProducts = useSelector(store.select.landingModel.selectAllProducts);
  const isFirstLanding = useSelector(store.select.landingModel.selectIsFirstLanding);

  useEffect(() => {
    if (isFirstLanding) dispatch.landingModel.handleLanding();
    if (!allProducts) dispatch.landingModel.getProducts();
  }, []);

  return (
    <Stack>
      <Fade onClick={() => {
        dispatch.globalModel.handleUnload([isUnloading, () => navigate("/product/WLLLGVR6NIGUJGJOZ7M2LCF6")]);
      }} transition={{ enter: { delay: 0.5, duration: 1 }, exit: { delay: 0.25, duration: 0.5 } }} in={true && !isUnloading}>
        <Box pointerEvents={'auto'} cursor={'pointer'} loop autoPlay muted playsInline controls={false} maxH="50vh" as="video" src={IMAGES.shirts_2} minW={"100vw"} objectFit={"cover"} />
      </Fade>
      <SlideFade transition={{ enter: { delay: 1.5, duration: 1.5 }, exit: { delay: 0.5, duration: 0.75 } }} in={true && !isUnloading}>
        <Box w="fit-content" mt={-12} bg="blackAlpha.600" fontFamily={"Helvetica"} rounded="none" pt={"4.5px"} pb={"5px"} px={3}>
          <Text fontSize={"xs"} fontWeight={"semibold"} fontFamily={"open"} color="white">
            hed dot tee
          </Text>
        </Box>
      </SlideFade>
      <Fade transition={{ enter: { delay: 0.5, duration: 1 }, exit: { delay: 0.25, duration: 0.5 } }} in={true && !isUnloading}>
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
            <SlideFade
              onClick={() => dispatch.globalModel.handleUnload([isUnloading, () => navigate(`/product/${product.id}`)])}
              transition={{ enter: { delay: index + 1 / 16, duration: 0.5 }, exit: { delay: 0.25, duration: 0.75 } }}
              in={true && !isUnloading}
            >
              <GridItem pointerEvents={"auto"} cursor={"pointer"} as={Stack} gap={2} border="1px" borderColor="blackAlpha.100" p={2.5} colSpan={1} key={product.id}>
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
            <SlideFade transition={{ enter: { delay: 2 }, exit: { delay: 0.5, duration: 0.75 } }} in={true && !isUnloading}>
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
export default Shop;
