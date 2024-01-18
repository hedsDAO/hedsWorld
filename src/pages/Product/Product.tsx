import { Dispatch, store } from "@/store/store";
import { formatPrice, returnVariationSize } from "@/store/utils";
import { Button, Collapse, Flex, GridItem, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ImageGallery from "./ImageGallery/ImageGallery";

const Product = () => {
  const dispatch = useDispatch<Dispatch>();
  const product = useSelector(store.select.productModel.selectProduct);
  const selectedVariant = useSelector(store.select.productModel.selectVariant);
  const selectedPhoto = useSelector(store.select.productModel.selectPhoto);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id && !product) {
      dispatch.productModel.getProductById(id);}
    return () => {
      dispatch.productModel.clearState();
    };
  }, []);

  const getSelectedVariantSize = () => {
    const variant = product?.itemData?.variations?.find((variant) => variant?.id === selectedVariant);
    return variant?.itemVariationData?.name;
  };

  return (
    <Stack justifyContent={"center"} minW="100vw">
      <SimpleGrid alignItems={"stretch"} gap={{ base: 2, lg: 4 }} py={{ base: 2, lg: 0 }} px={{ base: 4, lg: 4 }} columns={9}>
        <ImageGallery />
        <GridItem mt={{ base: 10, lg: 0 }} ml={1.5} colSpan={{ base: 9, lg: 1 }} as={Stack}>
          <Text fontFamily={"space"} fontWeight={"semibold"} color="blackAlpha.900" fontSize="md">
            {product?.itemData?.name}
          </Text>
          <Text fontFamily={"space"} mb={10} mt={-2} fontSize="2xs" textColor={"blackAlpha.600"}>
            {product?.itemData?.description}
          </Text>
          <Stack>
            <Flex gap={1.5}>
              {product?.itemData?.variations?.map((variation) => (
                <Button
                  key={variation?.id}
                  onClick={() => {
                    dispatch.productModel?.setSelectedVariant(variation?.id);
                  }}
                  border="1px"
                  textTransform={"uppercase"}
                  bg={variation?.id === selectedVariant ? "black" : "transparent"}
                  color={variation?.id === selectedVariant ? "white" : "black"}
                  _hover={{ bg: "blackAlpha.900", color: "white" }}
                  size="xs"
                  rounded="none"
                  fontWeight={"normal"}
                >
                  {returnVariationSize(variation.itemVariationData?.name)}
                </Button>
              ))}
            </Flex>
            <Stack gap={0} my={3}>
              {product?.itemData?.variations?.map((variation) => {
                const allMeasurements = Object.values(variation?.customAttributeValues || {});
                if (variation?.id === selectedVariant)
                  return allMeasurements?.map((measurement) => (
                    <Flex gap={2}>
                      <Text fontSize="xs" color="blackAlpha.700">
                        {measurement?.name}:
                      </Text>
                      <Text fontSize="xs" color="blackAlpha.700">{`${Number(measurement?.numberValue)}"`}</Text>
                    </Flex>
                  ));
              })}
            </Stack>
            <Collapse in={!!selectedVariant}>
              <Stack mt={4} maxW={{ lg: "13ch" }}>
                <Button
                  onClick={() => {
                    dispatch.cartModel?.addCartItem({
                      price: formatPrice(product?.itemData?.variations?.[0].itemVariationData?.priceMoney?.amount),
                      name: product?.itemData?.name || "",
                      size: returnVariationSize(getSelectedVariantSize() || ""),
                      catalogObjectId: selectedVariant || "",
                      itemType: product?.type || "",
                      quantity: "1",
                      image: product?.productImages?.[0] || "",
                    });
                  }}
                  size="xs"
                  fontWeight={"normal"}
                  rounded="none"
                  color="white"
                  bg="black"
                  _hover={{ background: "black" }}
                >
                  add to cart
                </Button>
              </Stack>
            </Collapse>
          </Stack>
        </GridItem>
      </SimpleGrid>
    </Stack>
  );
};

export default Product;
