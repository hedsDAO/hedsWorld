import { store } from "@/store/store";
import { formatPrice } from "@/store/utils";
import { Stack, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";

/**
 * @name ProductNameAndPrice
 * @description This component is responsible for rendering the product name and price.
 * @returns {JSX.Element} JSX.Element
 */

const ProductNameAndPrice = () => {
  const product = useSelector(store.select.productModel.selectProduct);
  const selectedVariant = useSelector(store.select.productModel.selectVariant);
  return (
    <Stack mb={4} mt={2}>
      <Text textTransform={"uppercase"} fontFamily={"Helvetica"} letterSpacing={"wide"} color="blackAlpha.900" fontSize="3xl">
        {product?.title}
      </Text>
      <Text dangerouslySetInnerHTML={{ __html: product?.descriptionHtml || "" }} mt={0} lineHeight={1.35} maxW={{ lg: "75%" }} fontFamily={"Helvetica"} fontSize="xs" textColor={"blackAlpha.700"} />
      <Text fontFamily={"open"} fontWeight={700} fontSize={"sm"}>
        {formatPrice(selectedVariant === null ? product?.variants[0]?.price?.amount : product?.variants[selectedVariant]?.price?.amount)}
      </Text>
    </Stack>
  );
};

export default ProductNameAndPrice;
