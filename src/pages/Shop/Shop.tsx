import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, store } from "@/store/store";
import { Collapse, SimpleGrid } from "@chakra-ui/react";

import LandingVideoAnimation from "@/pages/Landing/components/LandingVideoAnimation/LandingVideoAnimation";
import FeaturedProductDetails from "@/pages/Shop/components/FeaturedProductDetails/FeaturedProductDetails";
import FeaturedProductGallery from "@/pages/Shop/components/FeaturedProductGallery/FeaturedProductGallery";
import ShopAllProducts from "@/pages/Shop/components/ShopAllProducts/ShopAllProducts";
import * as styles from "@/pages/Shop/styles";

const Landing = () => {
  const dispatch = useDispatch<Dispatch>();
  const allProducts = useSelector(store.select.landingModel.selectAllProducts);
  const isFirstLanding = useSelector(store.select.landingModel.selectIsFirstLanding);
  const showLanding = useSelector(store.select.landingModel.selectShowLanding);

  useEffect(() => {
    if (isFirstLanding) dispatch.landingModel.handleLanding();
    if (!allProducts) dispatch.landingModel.getProducts();
  }, []);

  return (
    <>

      <Collapse in={showLanding} unmountOnExit transition={{ ...styles.$transitionAnimationProps }}>
        <SimpleGrid {...styles.$simpleGridStyles}>
          <FeaturedProductGallery />
          <FeaturedProductDetails />
        </SimpleGrid>
        <ShopAllProducts />
      </Collapse>
    </>
  );
};
export default Landing;
