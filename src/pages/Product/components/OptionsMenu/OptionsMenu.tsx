import { Dispatch, store } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { Menu, MenuButton, MenuItem, MenuList, Text, Button } from "@chakra-ui/react";
import * as styles from "@/pages/Product/components/OptionsMenu/styles";
import * as constants from "@/pages/Product/components/OptionsMenu/constants";

/**
 * @name OptionsMenu
 * @description This component is responsible for rendering the options menu.
 * @returns {JSX.Element} JSX.Element
 */

const OptionsMenu = () => {
  const dispatch = useDispatch<Dispatch>();
  const product = useSelector(store.select.productModel.selectProduct);
  const selectedVariant = useSelector(store.select.productModel.selectVariant);

  return (
    <Menu {...styles.$menuStyles}>
      <MenuButton as={Button} {...styles.$memuButtonStyles} rightIcon={<Text as={constants.ICON_ELEMENT} {...styles.$iconStyles} />}>
        {selectedVariant === null ? `${constants.SELECT_TEXT} ${product?.options?.[0]?.name}` : product?.variants[selectedVariant]?.title}
      </MenuButton>
      <MenuList {...styles.$menuListStyles}>
        {product?.variants?.map((variant, index) => (
          <MenuItem
            // @ts-ignore
            isDisabled={!variant?.available}
            key={index + variant.id}
            onClick={() => dispatch.productModel.setSelectedVariant(index)}
            {...styles.$menuListStyles}
          >
            {variant?.title}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default OptionsMenu;
