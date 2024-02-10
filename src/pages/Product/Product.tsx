import { Dispatch, store } from "@/store/store";
import { formatPrice, isItemSoldOut, returnVariationSize } from "@/store/utils";
import { Box, Button, Collapse, Flex, GridItem, Image, SimpleGrid, Stack, Text, Fade, useBoolean, useBreakpointValue } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { storage } from "@/App";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import AddedAnimation from "@/components/animations/Added/Added";
import MobileCarousel from "./components/MobileCarousel/MobileCarousel";

const Product = () => {
  const [previousImage, setPreviousImage] = useState<number>(0);
  const dispatch = useDispatch<Dispatch>();
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const [isClicked, setIsClicked] = useBoolean();
  const cart = useSelector(store.select.cartModel.selectCart);
  const isUnloading = useSelector(store.select.globalModel.selectIsUnloading);
  const product = useSelector(store.select.productModel.selectProduct);
  const selectedVariant = useSelector(store.select.productModel.selectVariant);
  const selectedPhoto = useSelector(store.select.productModel.selectPhoto);
  const [images, setImages] = useState<string[]>();
  const { id } = useParams<{ id: string }>();

  const getImages = async (id: string) => {
    const storageRef = ref(storage, `products/${id}`);
    const list = await listAll(storageRef);
    const urls = list.items.map((item) => getDownloadURL(item));
    const images = await Promise.all(urls);
    setImages(images);
  };

  useEffect(() => {
    if (id && !product) {
      getImages(id);
      dispatch.productModel.setSelectedPhoto(0);
      dispatch.productModel.getProductById(id);
    }
    return () => {
      dispatch.productModel.clearState();
    };
  }, [id]);

  useEffect(() => {
    if (isClicked) {
      const timeout = setTimeout(() => {
        setIsClicked.off();
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [isClicked]);

  const getSelectedVariantSize = () => {
    const variant = product?.itemData?.variations?.find((variant: any) => variant?.id === selectedVariant);
    return variant?.itemVariationData?.name;
  };

  return (
    <Stack overflowX={"hidden"} justifyContent={"start"} mb={{ base: 20, lg: 0 }} py={{ base: 6, lg: 24 }} px={{ base: 2, lg: 0 }} maxW="5xl" mx="auto">
      <SimpleGrid alignItems={"stretch"} gap={{ base: 2, lg: 8 }} py={{ base: 0, lg: 0 }} px={{ base: 2, lg: 0.5 }} columns={9}>
        <GridItem colSpan={{ base: 9, lg: 5 }} gap={0.5} as={SimpleGrid} columns={{ base: 3, lg: 4 }}>
          {images?.map((url, index) => {
            if (selectedPhoto === index)
              return (
                <GridItem key={index + selectedPhoto} minH="full" minW="full" display={{ base: "none", lg: "flex" }} onClick={() => dispatch.productModel.setSelectedPhoto(index)} colSpan={selectedPhoto === index ? 4 : 1}>
                  <Fade transition={{ enter: { delay: 0.5, duration: 0.5 }, exit: { delay: 0.5, duration: 0.75 } }} in={true && !isUnloading}>
                    <Box mixBlendMode={"difference"} position={"relative"}>
                      <Text fontFamily={"inter"} letterSpacing={"widest"} fontSize={{ base: "9px", lg: "2xs" }} textColor={"white"} mb={{ base: "-18px", lg: "-21px" }} pt={1.5} ml={{ base: 2, lg: 2.5 }}>{`[${index + 1} / ${
                        images.length
                      }]`}</Text>
                    </Box>
                    <Image aspectRatio={1} objectFit={"cover"} src={url} />
                  </Fade>
                </GridItem>
              );
          })}

          {isMobile && images ? (
            <MobileCarousel images={images} />
          ) : (
            images?.map((url, index: number) => {
              return (
                <GridItem
                  display={{ base: "none", lg: "flex" }}
                  onMouseEnter={() => {
                    if (selectedPhoto !== index) {
                      if (selectedPhoto) {
                        setPreviousImage(selectedPhoto);
                      }
                      dispatch.productModel.setSelectedPhoto(index);
                    }
                  }}
                  onMouseLeave={() => {
                    if (previousImage !== index) {
                      dispatch.productModel.setSelectedPhoto(previousImage);
                    }
                  }}
                  onClick={() => {
                    setPreviousImage(index);
                    dispatch.productModel.setSelectedPhoto(index);
                  }}
                  colSpan={{ base: 3, lg: 1 }}
                >
                  <Fade key={url} transition={{ enter: { delay: 0.75, duration: 1 }, exit: { delay: 0.5, duration: 0.75 } }} in={true && !isUnloading}>
                    <Box mixBlendMode={"difference"} position={"relative"}>
                      <Text fontFamily={"inter"} letterSpacing={"widest"} fontSize={{ base: "9px", lg: "2xs" }} textColor={"white"} mb={{ base: "-18px", lg: "-21px" }} pt={1.5} ml={{ base: 2, lg: 2.5 }}>{`[${index + 1} / ${
                        images.length
                      }]`}</Text>
                    </Box>
                    <Image aspectRatio={1} objectFit={"cover"} src={url} />
                  </Fade>
                </GridItem>
              );
            })
          )}
        </GridItem>
        <GridItem colSpan={{ base: 9, lg: 4 }} as={Stack}>
          <Fade transition={{ enter: { delay: 0.75, duration: 1 }, exit: { delay: 0.5, duration: 0.75 } }} in={true && !isUnloading}>
            <Text fontFamily={"Helvetica"} letterSpacing={"wide"} color="blackAlpha.900" fontSize="md">
              {product?.itemData?.name}
            </Text>
            <Text mt={"-0.5px !important"} letterSpacing={"wide"} fontFamily={"Helvetica"} color="blackAlpha.800" fontSize="sm">
              {formatPrice(product?.itemData?.variations?.[0]?.itemVariationData?.priceMoney?.amount)}
            </Text>
            <Text lineHeight={1.35} pt={8} maxW={{ lg: "75%" }} fontFamily={"space"} fontSize="xs" textColor={"blackAlpha.700"}>
              {product?.itemData?.description}
            </Text>
            {
              <Flex py={10} px={0} alignItems={"center"} gap={2.5}>
                <Box h="5" w="5" bg={`${product?.itemData?.variations?.[0]?.itemVariationData?.name?.split(", ")?.[1]}`} />
                <Text fontFamily={"Helvetica"} fontSize={"xs"}>
                  {product?.itemData?.variations?.[0]?.itemVariationData?.name?.split(", ")?.[1]}
                </Text>
              </Flex>
            }
            <Stack justifyContent={"center"} px={0}>
              <SimpleGrid inset={-1} columns={4}>
                {product?.itemData?.variations?.map((variation) => {
                  return (
                    <Button
                      as={GridItem}
                      colSpan={1}
                      key={variation?.id}
                      onClick={() => {
                        dispatch.productModel?.setSelectedVariant(variation?.id);
                      }}
                      isDisabled={isItemSoldOut(product, variation?.id)}
                      borderRight={isItemSoldOut(product, variation?.id) ? "0px" : "1px"}
                      borderColor="black"
                      bg={variation?.id === selectedVariant ? "black" : "white"}
                      color={variation?.id === selectedVariant ? "white" : "black"}
                      _hover={{ bg: "blackAlpha.900", color: "white" }}
                      size={{ base: "sm", lg: "xs" }}
                      rounded="none"
                      fontWeight={"normal"}
                    >
                      {returnVariationSize(variation.itemVariationData?.name).toLowerCase()}
                    </Button>
                  );
                })}
              </SimpleGrid>
              <Collapse in={!!selectedVariant}>
                <Stack mb={8} mt={5}>
                  <Button
                    fontFamily={"Helvetica"}
                    maxW={{ base: "100%", lg: "21.25ch" }}
                    onClick={() => {
                      setIsClicked.on();
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
                    isDisabled={isItemSoldOut(product, selectedVariant)}
                    size={{ base: "sm", lg: "xs" }}
                    fontWeight={"normal"}
                    rounded="none"
                    color="white"
                    bg={isClicked ? "white" : "black"}
                    _hover={{ background: isClicked ? "white" : "black" }}
                    _focus={{ background: isClicked ? "white" : "black" }}
                  >
                    {isItemSoldOut(product, selectedVariant) ? (
                      "sold out"
                    ) : isClicked ? (
                      <Fade transition={{ enter: { delay: 0, duration: 0.5 }, exit: { delay: 0, duration: 0.15 } }} in={isClicked}>
                        <Box h={{ base: "100px", lg: "80px" }} w={{ base: "100px", lg: "80px" }}>
                          <AddedAnimation />
                        </Box>
                      </Fade>
                    ) : (
                      "add to cart"
                    )}
                  </Button>
                </Stack>
              </Collapse>
            </Stack>
            <ProductDetails />
          </Fade>
        </GridItem>
      </SimpleGrid>
    </Stack>
  );
};

export default Product;
