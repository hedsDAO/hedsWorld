import { Dispatch, store } from "@/store/store";
import { GridItem, SimpleGrid, Stack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import ProductGallery from "./components/ProductGallery/ProductGallery";

const Product = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<Dispatch>();
  const product = useSelector(store.select.productModel.selectProduct);

  useEffect(() => {
    if (id) {
      dispatch.productModel.setSelectedPhoto(0);
      dispatch.productModel.getShopifyProductByHandle(id);
    }
    return () => {
      dispatch.productModel.clearState();
    };
  }, [id]);

  return (
    <Stack overflowX={"hidden"} justifyContent={"start"} mb={{ base: 20, lg: 0 }} py={{ base: 6, lg: 24 }} px={{ base: 2, lg: 0 }} maxW="5xl" mx="auto">
      <SimpleGrid alignItems={"stretch"} gap={{ base: 2, lg: 8 }} py={{ base: 0, lg: 0 }} px={{ base: 2, lg: 0.5 }} columns={9}>
        <GridItem colSpan={{ base: 9, lg: 5 }} gap={1} as={SimpleGrid} columns={{ base: 3, lg: 4 }}>
          {product?.images && <ProductGallery images={product?.images} />}
        </GridItem>
        <GridItem colSpan={{ base: 9, lg: 4 }} as={Stack}>
          <ProductDetails />
        </GridItem>
      </SimpleGrid>
    </Stack>
  );
};

export default Product;
