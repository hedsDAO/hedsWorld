import { Dispatch, store } from "@/store/store";
import { formatPrice } from "@/store/utils";
import { Fade, Text, Stack, Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

const ProductDetails = () => {
  const dispatch = useDispatch<Dispatch>();
  const isUnloading = useSelector(store.select.globalModel.selectIsUnloading);
  const checkout = useSelector(store.select.cartModel.selectCheckout);
  const product = useSelector(store.select.productModel.selectProduct);
  const selectedVariant = useSelector(store.select.productModel.selectVariant);
  return (
    <Fade transition={{ enter: { delay: 0.75, duration: 1 }, exit: { delay: 0.5, duration: 0.75 } }} in={true && !isUnloading}>
      <Stack mb={4} mt={2}>
        <Text textTransform={"uppercase"} fontFamily={"Helvetica"} letterSpacing={"wide"} color="blackAlpha.900" fontSize="3xl">
          {product?.title}
        </Text>
        <Text dangerouslySetInnerHTML={{ __html: product?.descriptionHtml || "" }} mt={0} lineHeight={1.35} maxW={{ lg: "75%" }} fontFamily={"Helvetica"} fontSize="xs" textColor={"blackAlpha.700"}></Text>
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
                key={index + variant.id}
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
  );
};

export default ProductDetails;
