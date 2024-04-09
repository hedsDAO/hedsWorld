import { Stack, Flex, Text } from "@chakra-ui/react";
import * as constants from "@/pages/Shop/components/ShopAllHeader/constants";
import * as styles from "@/pages/Shop/components/ShopAllHeader/styles";

/**
 * @name ShopAllHeader
 * @description displays the shop all header.
 * @returns {JSX.Element} ShopAllHeader component
 */

const ShopAllHeader = () => {
  return (
    <Stack {...styles.$stackStyles}>
      <Flex {...styles.$flexStyles}>
        <Text {...styles.$textStyles}>{constants.SHOP_ALL_TEXT}</Text>
        <Text as={constants.ICON_ELEMENT} {...styles.$iconStyles} />
      </Flex>
    </Stack>
  );
};

export default ShopAllHeader;
