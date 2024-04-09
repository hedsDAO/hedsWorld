import { useDispatch, useSelector } from "react-redux";
import { Dispatch, store } from "@/store/store";
import { Flex, Text } from "@chakra-ui/react";
import CartDrawer from "@/components/navs/Navbar/components/CartDrawer/CartDrawer";
import * as styles from "@/components/navs/Navbar/components/CheckoutButton/styles";
import * as constants from "@/components/navs/Navbar/components/CheckoutButton/constants";

/**
 * @name CheckoutButton
 * @description CheckoutButton component
 * @returns {JSX.Element} JSX.Element
 */

const CheckoutButton = () => {
  const dispatch = useDispatch<Dispatch>();
  const checkout = useSelector(store.select.cartModel.selectCheckout);
  const isDrawerOpen = useSelector(store.select.cartModel.selectIsDrawerOpen);
  return (
    <Flex onClick={() => dispatch.cartModel.setIsDrawerOpen(!isDrawerOpen)} {...styles.$flexStyles}>
      <Text {...styles.$textStyle}>{checkout?.lineItems?.length}</Text>
      <Text as={constants.ICON_ELEMENT} {...styles.$iconStyles} />
      <CartDrawer />
    </Flex>
  );
};

export default CheckoutButton;
