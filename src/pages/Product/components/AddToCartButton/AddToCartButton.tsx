import { useDispatch, useSelector } from "react-redux";
import { Dispatch, store } from "@/store/store";
import { Button } from "@chakra-ui/react";
import * as styles from "@/pages/Product/components/AddToCartButton/styles";
import * as constants from "@/pages/Product/components/AddToCartButton/constants";

/**
 * @name AddToCartButton
 * @description This component is responsible for rendering the add to cart button.
 * @returns {JSX.Element} JSX.Element
 */

const AddToCartButton = () => {
  const dispatch = useDispatch<Dispatch>();
  const product = useSelector(store.select.productModel.selectProduct);
  const checkout = useSelector(store.select.cartModel.selectCheckout);
  const selectedVariant = useSelector(store.select.productModel.selectVariant);
  return (
    <Button
      onClick={() => {
        if (selectedVariant !== null && checkout && product?.variants?.[selectedVariant]?.id) {
          dispatch.cartModel.addLineItemToCart([checkout.id, [{ variantId: product?.variants?.[selectedVariant]?.id, quantity: 1 }]]);
        }
      }}
      isDisabled={selectedVariant === null}
      {...styles.$buttonStyles}
    >
      {constants.ADD_TO_CART}
    </Button>
  );
};

export default AddToCartButton;
