import { ProductCategoryFilter } from "@/models/landing";
import { Dispatch, store } from "@/store/store";
import { CatalogItem } from "@/store/types";
import { returnProductCategory } from "@/store/utils";
import { SlideFade, GridItem, Stack, Image, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as styles from "./styles";

const ShopPageProducts = () => {
  const dispatch = useDispatch<Dispatch>();
  const navigate = useNavigate();
  const categoryFilter = useSelector(store.select.landingModel.selectCategoryFilter);
  const isUnloading = useSelector(store.select.globalModel.selectIsUnloading);
  const allProducts = useSelector(store.select.landingModel.selectAllProducts);
  return (
    <>
      {allProducts?.map((product: CatalogItem, index: number) => {
        const productCategory = returnProductCategory(product);
        if (categoryFilter === ProductCategoryFilter.ALL || productCategory === categoryFilter) {
          return (
            <SlideFade key={index + product.id} {...styles.$slideFadeStyle0(index)} onClick={() => dispatch.globalModel.handleUnload([isUnloading, () => navigate(`/product/${product.id}`)])} in={true && !isUnloading}>
              <GridItem {...styles.$gridItemStyle1} as={Stack}>
                <Image {...styles.$imageStyle2} src={product.productImages?.[0]} />
                <Stack {...styles.$stackStyle3}>
                  <Text {...styles.$textStyle4}>{product.itemData?.name}</Text>
                </Stack>
              </GridItem>
            </SlideFade>
          );
        }
      })}
    </>
  );
};
export default ShopPageProducts;
