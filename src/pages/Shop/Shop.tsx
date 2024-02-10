import * as styles from "./styles";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SimpleGrid, Stack } from "@chakra-ui/react";
import { Dispatch, store } from "@/store/store";
import CategoryFilterDropdown from "@/pages/Shop/components/CategoryFilterDropdown/CategoryFilterDropdown";
import FeaturedProductHeader from "@/pages/Shop/components/FeaturedProductHeader/FeaturedProductHeader";
import ShopPageProducts from "@/pages/Shop/components/ShopPageProducts/ShopPageProducts";
import ShopPageProductsSkeletons from "@/pages/Shop/components/ShopPageProductsSkeletons/ShopPageProductsSkeletons";

const Shop = () => {
  const dispatch = useDispatch<Dispatch>();
  const allProducts = useSelector(store.select.landingModel.selectAllProducts);
  const isFirstLanding = useSelector(store.select.landingModel.selectIsFirstLanding);

  useEffect(() => {
    if (isFirstLanding) dispatch.landingModel.handleLanding();
    if (!allProducts) dispatch.landingModel.getProducts();
    return () => {
      dispatch.landingModel.clearState();
    };
  }, []);

  return (
    <Stack>
      <FeaturedProductHeader />
      <CategoryFilterDropdown />
      <SimpleGrid {...styles.$simpleGridStyle0}>
        <ShopPageProducts />
        <ShopPageProductsSkeletons />
      </SimpleGrid>
    </Stack>
  );
};
export default Shop;
