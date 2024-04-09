import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Dispatch, store } from "@/store/store";
import { Flex, GridItem, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import * as constants from "@/pages/Shop/components/AllProducts/constants";
import * as styles from "@/pages/Shop/components/AllProducts/styles";

/**
 * @name AllProducts
 * @description displays all products.
 * @returns {JSX.Element} AllProducts component
 */

const AllProducts = () => {
  const dispatch = useDispatch<Dispatch>();
  const navigate = useNavigate();
  const isUnloading = useSelector(store.select.globalModel.selectIsUnloading);
  const allProducts = useSelector(store.select.landingModel.selectAllProducts);
  return (
    <SimpleGrid {...styles.$gridStyles}>
      {allProducts?.map((product) => {
        return (
          <GridItem
            as={Stack}
            key={product.id}
            {...styles.$gridItemStyles}
            onClick={() => dispatch.globalModel.handleUnload([isUnloading, () => navigate(`${constants.PRODUCT_URL}/${product.handle}`)])}
          >
            <Image {...styles.$imageStyles} src={product?.images?.[0]?.src} />
            <Flex {...styles.$flexStyles}>
              <Text as={constants.ICON_ELEMENT} {...styles.$iconStyles} />
              <Text {...styles.$textStyles}>{product?.title}</Text>
            </Flex>
          </GridItem>
        );
      })}
    </SimpleGrid>
  );
};

export default AllProducts;
