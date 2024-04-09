import { Dispatch, store } from "@/store/store";
import { Button, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import * as constants from "@/components/checkout/CartDrawer/components/CheckoutButton/constants";
import * as styles from "@/components/checkout/CartDrawer/components/CheckoutButton/styles";

/**
 * @name CheckoutButton
 * @description CheckoutButton component
 * @returns {JSX.Element} JSX.Element
 */

const CheckoutButton = () => {
  const dispatch = useDispatch<Dispatch>();
  const checkout = useSelector(store.select.cartModel.selectCheckout);
  const checkoutLineItems = useSelector(store.select.cartModel.selectCheckoutLineItems);
  const handleClick = () => {
    if (window && checkout?.webUrl) {
      dispatch.cartModel.setIsDrawerOpen(false);
      window.location.href = checkout?.webUrl;
    }
  };

  return (
    <Button isDisabled={!checkout?.webUrl || !checkoutLineItems?.length} onClick={() => dispatch.globalModel.handleUnload([false, handleClick])} {...styles.$buttonStyles}>
      <Text {...styles.$fontStyles}>{constants.CHECKOUT}</Text>
    </Button>
  );
};

export default CheckoutButton;
