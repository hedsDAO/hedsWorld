import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, store } from "@/store/store";
import { Stack } from "@chakra-ui/react";
import AllProducts from "@/pages/Shop/components/AllProducts/AllProducts";
import ShopAllHeader from "@/pages/Shop/components/ShopAllHeader/ShopAllHeader";
import FeaturedProductHeader from "@/pages/Shop/components/FeaturedProductHeader/FeaturedProductHeader";

/**
 * @name Shop
 * @description displays all products and featured product.
 * @returns {JSX.Element} Shop page
 */

const Shop = () => {
  const dispatch = useDispatch<Dispatch>();
  const allProducts = useSelector(store.select.landingModel.selectAllProducts);
  const isFirstLanding = useSelector(store.select.landingModel.selectIsFirstLanding);
  useEffect(() => {
    if (isFirstLanding) dispatch.landingModel.handleLanding();
    if (!allProducts) dispatch.landingModel.getShopifyProducts();
    return () => {
      dispatch.landingModel.clearState();
    };
  }, []);
  return (
    <Stack>
      <FeaturedProductHeader />
      <ShopAllHeader />
      {allProducts && <AllProducts />}
    </Stack>
  );
};
export default Shop;
