import { Flex, Text } from "@chakra-ui/react";
import { formatPrice } from "@/store/utils";
import { useSelector } from "react-redux";
import { store } from "@/store/store";
import * as constants from "@/components/checkout/CartDrawer/components/SubtotalText/constants";
import * as styles from "@/components/checkout/CartDrawer/components/SubtotalText/styles";

/**
 * @name SubtotalText
 * @description SubtotalText component
 * @returns {JSX.Element} JSX.Element
 */

const SubtotalText = () => {
  const checkout = useSelector(store.select.cartModel.selectCheckout);
  return (
    <Flex {...styles.$flexStyles}>
      <Text {...styles.$subtotalStyles}>{constants.SUBTOTAL}</Text>
      <Text>{formatPrice(checkout?.subtotalPrice.amount)}</Text>
    </Flex>
  );
};

export default SubtotalText;
