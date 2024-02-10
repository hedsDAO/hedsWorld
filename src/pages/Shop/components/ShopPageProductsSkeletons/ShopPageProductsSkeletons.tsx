import * as styles from "./styles";
import { store } from "@/store/store";
import { SlideFade, GridItem, Stack, Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const ShopPageProductsSkeletons = () => {
  const isUnloading = useSelector(store.select.globalModel.selectIsUnloading);
  const allProducts = useSelector(store.select.landingModel.selectAllProducts);
  return (
    <>
      {new Array(Math.abs((allProducts?.length || 1) - 8)).fill(null)?.map((_, index: number) => {
        return (
          <SlideFade key={index} {...styles.$slideFadeStyle0} in={true && !isUnloading}>
            <GridItem {...styles.$gridItemStyle1} as={Stack}>
              <Box {...styles.$boxStyle2} />
              <Stack {...styles.$stackStyle3} />
            </GridItem>
          </SlideFade>
        );
      })}
    </>
  );
};
export default ShopPageProductsSkeletons;
