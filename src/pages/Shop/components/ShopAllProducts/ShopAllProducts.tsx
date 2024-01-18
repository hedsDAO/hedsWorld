import { store } from "@/store/store";
import { GridItem, Image, SimpleGrid, Skeleton, Stack, Text, useBoolean } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ShopAllProducts = () => {
  const navigate = useNavigate();
  const allProducts = useSelector(store.select.landingModel.selectAllProducts);
  const [hasImageLoaded, setHasImageLoaded] = useBoolean();
  return (
    <SimpleGrid mb={4} px={{ base: 4, lg: 4 }} mt={4} gap={5} columns={6}>
      <GridItem mt={{ base: 4, lg: 2 }} colSpan={6} px={{ base: 1, lg: 2 }} as={Stack}>
        <Text fontFamily={"space"} color="black" fontSize="lg">
          shop all
        </Text>
      </GridItem>
      {allProducts?.length &&
        allProducts?.map((product) => (
          <GridItem onClick={() => navigate(`/product/${product.id}`)} colSpan={{ base: 2, lg: 1 }}>
            <Skeleton
              startColor="blackAlpha.300"
              endColor="blackAlpha.100"
              boxSize={{ base: "100%", lg: "100%" }}
              isLoaded={hasImageLoaded}
            >
              <Image
                aspectRatio={1}
                onLoad={() => setHasImageLoaded.on()}
                objectFit={"cover"}
                src={product?.productImages?.[0]}
                boxSize={{ base: "100%", lg: "100%" }}
              />
            </Skeleton>
          </GridItem>
        ))}
    </SimpleGrid>
  );
};

export default ShopAllProducts;
