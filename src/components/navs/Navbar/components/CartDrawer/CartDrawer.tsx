import { Dispatch, store } from "@/store/store";
import { formatPrice } from "@/store/utils";
import { Button, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

const CartDrawer = () => {
  const tempRef = useRef(null);
  const dispatch = useDispatch<Dispatch>();
  const isDrawerOpen = useSelector(store.select.cartModel.selectIsDrawerOpen);
  const checkout = useSelector(store.select.cartModel.selectCheckout);
  const checkoutLineItems = useSelector(store.select.cartModel.selectCheckoutLineItems);
  return (
    <Drawer trapFocus={false} size={{ base: "100%", lg: "sm" }} isOpen={isDrawerOpen} placement="right" initialFocusRef={tempRef} onClose={() => dispatch.cartModel.setIsDrawerOpen(false)}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader minW="100%" lineHeight={"20px"}>
          CHECKOUT
        </DrawerHeader>
        <Divider />
        <DrawerCloseButton />
        <DrawerBody minW="100%" px={6} mt={6} gap={3} as={Stack}>
          {checkoutLineItems?.length ? (
            checkoutLineItems?.map((lineItem) => (
              <Flex gap={6} alignItems={"center"}>
                <Image rounded={"sm"} maxH="80px" src={lineItem?.variant?.image.src || ""} objectFit={"cover"} aspectRatio={1} />
                <Stack mt={-1} gap={0}>
                  <Text textTransform={"uppercase"} fontFamily={"hanken"} fontSize={"lg"} fontWeight={600} key={lineItem.id}>
                    {lineItem.title}
                  </Text>
                  <Flex fontSize={"2xs"}>
                    <Text fontWeight={600} fontFamily={"hanken"} textTransform={"uppercase"} mr={1}>
                      {lineItem?.variant?.selectedOptions?.[0]?.name}:
                    </Text>
                    <Text fontWeight={400} fontFamily={"hanken"} textTransform={"uppercase"}>
                      {lineItem?.variant?.title}
                    </Text>
                  </Flex>
                  <Flex fontSize={"2xs"}>
                    <Text fontWeight={600} fontFamily={"hanken"} textTransform={"uppercase"} mr={1}>
                      {"quantity:"}
                    </Text>
                    <Text fontWeight={400} fontFamily={"hanken"} textTransform={"uppercase"}>
                      {lineItem?.quantity}
                    </Text>
                  </Flex>
                </Stack>
                <Stack py={1} justifyContent={"space-between"} minH="100%" ml="auto">
                  <Text fontWeight={700} fontSize={"xs"} fontFamily={"inter"} textAlign={"right"}>
                    {formatPrice(lineItem?.variant?.price?.amount)}
                  </Text>
                  <Text
                    onClick={() => {
                      dispatch.cartModel.removeLineItemFromCart([checkout?.id || "", [lineItem.id]]);
                    }}
                    cursor={"pointer"}
                    _hover={{ color: "black" }}
                    color="heds.700"
                    textUnderlineOffset={"3px"}
                    textDecoration={"underline"}
                    fontSize={"2xs"}
                    fontFamily={"inter"}
                    textAlign={"right"}
                  >
                    remove
                  </Text>
                </Stack>
              </Flex>
            ))
          ) : (
            <Text mt={-1} fontWeight={500} color="heds.500" fontFamily={"hanken"} fontSize={"sm"} ml={1}>
              there's nothing here...
            </Text>
          )}
        </DrawerBody>
        <DrawerFooter gap={4} as={Stack}>
          <Flex minW="100%" justifyContent={"space-between"}>
            <Text fontWeight={500} color="heds.500" fontFamily={"hanken"} fontSize={"sm"}>
              SUBTOTAL
            </Text>
            <Text fontWeight={700} color="black" fontFamily={"hanken"} fontSize={"sm"}>
              {formatPrice(checkout?.subtotalPrice.amount)}
            </Text>
          </Flex>
          <Button
            isDisabled={!checkout?.webUrl || !checkoutLineItems?.length}
            onClick={() => {
              dispatch.globalModel.handleUnload([
                false,
                () => {
                  if (window && checkout?.webUrl) {
                    dispatch.cartModel.setIsDrawerOpen(false);
                    window.location.href = checkout?.webUrl;
                  }
                },
              ]);
            }}
            size="sm"
            bg="white"
            color="black"
            border="1px solid"
            borderColor="black"
            _hover={{ bg: "black", color: "white" }}
            transition="0.2s all ease-in-out"
            rounded="full"
            minW="100%"
          >
            <Text fontFamily={"hanken"} fontSize={"xs"} fontWeight={600} textTransform={"uppercase"}>
              checkout
            </Text>
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CartDrawer;
