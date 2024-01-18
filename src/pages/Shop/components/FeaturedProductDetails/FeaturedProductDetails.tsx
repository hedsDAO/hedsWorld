import { store } from "@/store/store";
import { formatPrice } from "@/store/utils";
import { GridItem, Stack, Button, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const FeaturedProductDetails = () => {
  const navigate = useNavigate();
  const featuredProduct = useSelector(store.select.landingModel.selectFeaturedProduct);
  return (
    <GridItem alignItems={"start"} mt={{ base: 4, lg: 0 }} colSpan={{ base: 7, lg: 2 }} px={{ base: 4, lg: 20 }} as={Stack}>
      <Text fontFamily={"space"} color="black" fontSize="lg">
        {featuredProduct?.itemData?.name}
      </Text>
      <Text fontSize={"2xs"} maxW="15rem" fontFamily={"space"} color="blackAlpha.700">
        {featuredProduct?.itemData?.description}
      </Text>
      <Button
        mt={4}
        onClick={() => navigate(`/product/${featuredProduct?.id}`)}
        bg="black"
        minW="50%"
        size="xs"
        color="white"
        _hover={{ bg: "blackAlpha.700" }}
        rounded="none"
        fontFamily={"space"}
      >
        shop
      </Button>
    </GridItem>
  );
};

export default FeaturedProductDetails;
