import * as styles from "./styles";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Flex, GridItem, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { Dispatch, store } from "@/store/store";
import CategoryFilterDropdown from "@/pages/Shop/components/CategoryFilterDropdown/CategoryFilterDropdown";
import FeaturedProductHeader from "@/pages/Shop/components/FeaturedProductHeader/FeaturedProductHeader";
import ShopPageProducts from "@/pages/Shop/components/ShopPageProducts/ShopPageProducts";
import ShopPageProductsSkeletons from "@/pages/Shop/components/ShopPageProductsSkeletons/ShopPageProductsSkeletons";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<Dispatch>();
  const allProducts = useSelector(store.select.landingModel.selectAllProducts);
  const isFirstLanding = useSelector(store.select.landingModel.selectIsFirstLanding);
  const isUnloading = useSelector(store.select.globalModel.selectIsUnloading);

  useEffect(() => {
    if (isFirstLanding) dispatch.landingModel.handleLanding();
    if (!allProducts) {
      // dispatch.landingModel.getProducts();
      dispatch.landingModel.getShopifyProducts();
    }

    return () => {
      dispatch.landingModel.clearState();
    };
  }, []);

  return (
    <Stack>
      <FeaturedProductHeader />
      <Stack alignItems={"start"} px={10} py={10}>
        <Flex gap={6} alignItems={"center"}>
          <Text fontFamily={"hanken"} fontSize={"50px"} fontWeight={500}>
            SHOP ALL
          </Text>
          <Text fontSize="3xl" as="i" className="fa-sharp fa-solid fa-angle-down" />
        </Flex>
      </Stack>
      {allProducts && (
        <SimpleGrid pt={0} pb={20} px={4} gap={4} columns={{ base: 1, lg: 5 }}>
          {allProducts.map((product, index) => {
            return (
              <GridItem onClick={() => dispatch.globalModel.handleUnload([isUnloading, () => navigate(`/product/${product.handle}`)])} gap={2} as={Stack}>
                <Image boxShadow="rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px" objectFit={"cover"} aspectRatio={1} src={product?.images?.[0]?.src} />
                <Flex gap={2} alignItems={"center"}>
                  <Text fontSize="3xl" as="i" className="fa-sharp fa-solid fa-angle-right" />

                  <Text isTruncated textTransform={"uppercase"} pl={1} fontWeight={500} fontSize="3xl" fontFamily={"hanken"}>
                    {product?.title}
                  </Text>
                </Flex>
              </GridItem>
            );
          })}
        </SimpleGrid>
      )}
    </Stack>
  );
};
export default Shop;
