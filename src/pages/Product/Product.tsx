import { Dispatch, store } from "@/store/store";
import { formatPrice, isItemSoldOut, returnVariationSize } from "@/store/utils";
import { Box, Button, Collapse, Flex, GridItem, Image, SimpleGrid, Stack, Text, Fade, useBoolean, useBreakpointValue, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import AddedAnimation from "@/components/animations/Added/Added";
import MobileCarousel from "./components/MobileCarousel/MobileCarousel";
import { ProductOption } from "shopify-buy";

const Product = () => {
  const [previousImage, setPreviousImage] = useState<number>(0);
  const dispatch = useDispatch<Dispatch>();
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const [isClicked, setIsClicked] = useBoolean();
  const isUnloading = useSelector(store.select.globalModel.selectIsUnloading);
  const product = useSelector(store.select.productModel.selectProduct);
  const selectedVariant = useSelector(store.select.productModel.selectVariant);
  const selectedPhoto = useSelector(store.select.productModel.selectPhoto);
  const checkout = useSelector(store.select.cartModel.selectCheckout);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      dispatch.productModel.setSelectedPhoto(0);
      dispatch.productModel.getShopifyProductByHandle(id);
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

  return (
    <Stack overflowX={"hidden"} justifyContent={"start"} mb={{ base: 20, lg: 0 }} py={{ base: 6, lg: 24 }} px={{ base: 2, lg: 0 }} maxW="5xl" mx="auto">
      <SimpleGrid alignItems={"stretch"} gap={{ base: 2, lg: 8 }} py={{ base: 0, lg: 0 }} px={{ base: 2, lg: 0.5 }} columns={9}>
        <GridItem colSpan={{ base: 9, lg: 5 }} gap={1} as={SimpleGrid} columns={{ base: 3, lg: 4 }}>
          {product?.images?.map((image, index) => {
            if (selectedPhoto === index)
              return (
                <GridItem key={index + selectedPhoto} minH="full" minW="full" display={{ base: "none", lg: "flex" }} onClick={() => dispatch.productModel.setSelectedPhoto(index)} colSpan={selectedPhoto === index ? 4 : 1}>
                  <Fade transition={{ enter: { delay: 0.5, duration: 0.5 }, exit: { delay: 0.5, duration: 0.75 } }} in={true && !isUnloading}>
                    <Box mixBlendMode={"difference"} position={"relative"}>
                      <Text fontFamily={"inter"} letterSpacing={"widest"} fontSize={{ base: "9px", lg: "2xs" }} textColor={"white"} mb={{ base: "-18px", lg: "-21px" }} pt={1.5} ml={{ base: 2, lg: 2.5 }}>{`[${index + 1} / ${
                        product?.images.length
                      }]`}</Text>
                    </Box>
                    <Image aspectRatio={1} objectFit={"cover"} src={image.src} />
                  </Fade>
                </GridItem>
              );
          })}

          {isMobile && product?.images ? (
            <MobileCarousel images={product?.images} />
          ) : (
            product?.images?.map((image, index: number) => {
              return (
                <GridItem
                  key={image.url}
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
                  <Fade key={image?.altText} transition={{ enter: { delay: 0.75, duration: 1 }, exit: { delay: 0.5, duration: 0.75 } }} in={true && !isUnloading}>
                    <Box mixBlendMode={"difference"} position={"relative"}>
                      <Text fontFamily={"inter"} letterSpacing={"widest"} fontSize={{ base: "9px", lg: "2xs" }} textColor={"white"} mb={{ base: "-18px", lg: "-21px" }} pt={1.5} ml={{ base: 2, lg: 2.5 }}>{`[${index + 1} / ${
                        product?.images?.length
                      }]`}</Text>
                    </Box>
                    <Image aspectRatio={1} objectFit={"cover"} src={image.src} />
                  </Fade>
                </GridItem>
              );
            })
          )}
        </GridItem>
        <GridItem colSpan={{ base: 9, lg: 4 }} as={Stack}>
          <Fade transition={{ enter: { delay: 0.75, duration: 1 }, exit: { delay: 0.5, duration: 0.75 } }} in={true && !isUnloading}>
            <Stack mb={4} mt={2}>
              <Text textTransform={"uppercase"} fontFamily={"Helvetica"} letterSpacing={"wide"} color="blackAlpha.900" fontSize="3xl">
                {product?.title}
              </Text>
              <Text mt={0} lineHeight={1.35} maxW={{ lg: "75%" }} fontFamily={"Helvetica"} fontSize="xs" textColor={"blackAlpha.700"}>
                {product?.description}
              </Text>
              <Text fontFamily={"open"} fontWeight={700} fontSize={"sm"}>
                {formatPrice(selectedVariant === null ? product?.variants[0]?.price?.amount : product?.variants[selectedVariant]?.price?.amount)}
              </Text>
            </Stack>
            <Stack gap={5} maxW={{ lg: "50%" }}>
              <Menu size="xs">
                <MenuButton
                  _hover={{ bg: "black", color: "white" }}
                  _active={{ bg: "black", color: "white" }}
                  border="1px solid"
                  rounded="none"
                  size="xs"
                  bg="transparent"
                  textTransform={"uppercase"}
                  as={Button}
                  rightIcon={<Text as="i" className="fas fa-chevron-down" />}
                >
                  {selectedVariant === null ? `SELECT ${product?.options?.[0]?.name}` : product?.variants[selectedVariant]?.title}
                </MenuButton>
                <MenuList borderTop={"1px solid"} borderX="1px solid" py={0} rounded={"none"} bg="white">
                  {product?.variants?.map((variant, index) => (
                    <MenuItem
                      // shopify needs to update types, this is a false positive
                      //@ts-ignore
                      isDisabled={!variant?.available}
                      onClick={() => dispatch.productModel.setSelectedVariant(index)}
                      fontSize={"sm"}
                      py={1}
                      borderBottom={"1px solid"}
                      _focus={{ bg: "black", color: "white" }}
                      _hover={{ bg: "black", color: "white" }}
                    >
                      {variant?.title}
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
              <Button
                onClick={() => {
                  if (selectedVariant !== null && checkout && product?.variants?.[selectedVariant]?.id) {
                    dispatch.cartModel.addLineItemToCart([checkout.id, [{ variantId: product?.variants?.[selectedVariant]?.id, quantity: 1 }]]);
                  }
                }}
                isDisabled={selectedVariant === null}
                _hover={{ bg: "black", color: "white" }}
                _active={{ bg: "black", color: "white" }}
                border="1px solid"
                rounded="3xl"
                size="xs"
                bg="transparent"
              >
                ADD TO CART
              </Button>
            </Stack>
          </Fade>
        </GridItem>
      </SimpleGrid>
    </Stack>
  );
};

export default Product;
