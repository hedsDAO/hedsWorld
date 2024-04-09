import { useSelector } from "react-redux";
import { Fade, Stack } from "@chakra-ui/react";
import { store } from "@/store/store";
import ProductNameAndPrice from "@/pages/Product/components/ProductNameAndPrice/ProductNameAndPrice";
import AddToCartButton from "@/pages/Product/components/AddToCartButton/AddToCartButton";
import OptionsMenu from "@/pages/Product/components/OptionsMenu/OptionsMenu";
import * as styles from "@/pages/Product/components/ProductDetails/styles";

/**
 * @name ProductDetails
 * @description This component is responsible for rendering the product details.
 * @returns {JSX.Element} JSX.Element
 */

const ProductDetails = () => {
  const isUnloading = useSelector(store.select.globalModel.selectIsUnloading);
  return (
    <Fade {...styles.$fadeStyles} in={true && !isUnloading}>
      <ProductNameAndPrice />
      <Stack {...styles.$stackStyles}>
        <OptionsMenu />
        <AddToCartButton />
      </Stack>
    </Fade>
  );
};

export default ProductDetails;
