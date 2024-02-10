import { ProductCategoryFilter } from "@/models/landing";
import { Dispatch, store } from "@/store/store";
import { Menu, MenuButton, MenuList, MenuItem, Text, Flex, Divider } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import * as constants from "./constants";
import * as styles from "./styles";

const CategoryFilterDropdown = () => {
  const dispatch = useDispatch<Dispatch>();
  const categoryFilter = useSelector(store.select.landingModel.selectCategoryFilter);
  const CategoryFilterMap = {
    [ProductCategoryFilter.ALL]: "all products",
    [ProductCategoryFilter.APPAREL]: "apparel",
    [ProductCategoryFilter.ACCESSORIES]: "accessories",
  };
  return (
    <Menu {...styles.$menuStyle0}>
      <MenuButton>
        <Flex {...styles.$flexStyle1}>
          <Text {...styles.$textStyle2} as={"i"} />
          <Text {...styles.$textStyle3}>{CategoryFilterMap[categoryFilter]}</Text>
        </Flex>
      </MenuButton>
      <MenuList {...styles.$menuListStyle4}>
        <MenuItem {...styles.$menuItemStyle5} onClick={() => dispatch.landingModel.setCategoryFilter(ProductCategoryFilter.ALL)}>
          {constants.text1}
        </MenuItem>
        <Divider {...styles.$dividerStyle6} />
        <MenuItem {...styles.$menuItemStyle7} onClick={() => dispatch.landingModel.setCategoryFilter(ProductCategoryFilter.APPAREL)}>
          {constants.text2}
        </MenuItem>
        <Divider {...styles.$dividerStyle8} />
        <MenuItem {...styles.$menuItemStyle9} onClick={() => dispatch.landingModel.setCategoryFilter(ProductCategoryFilter.ACCESSORIES)}>
          {constants.text3}
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
export default CategoryFilterDropdown;
