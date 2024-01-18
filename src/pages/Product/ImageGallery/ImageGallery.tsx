import { Dispatch, store } from "@/store/store";
import { GridItem, Stack, Image, useBoolean, Skeleton, Collapse } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

const ImageGallery = () => {
  const [hasImageLoaded, setHasImageLoaded] = useBoolean();
  const dispatch = useDispatch<Dispatch>();
  const selectedPhoto = useSelector(store.select.productModel.selectPhoto);
  const product = useSelector(store.select.productModel.selectProduct);
  return (
    <>
      <GridItem direction={{ base: "row", lg: "column" }} colSpan={{ base: 9, lg: 1 }} gap={{ base: 2, lg: 4 }} as={Stack}>
        {product?.productImages?.map((url) => (
          <Skeleton
            w={{ base: "11rem", lg: "100%" }}
            startColor="blackAlpha.300"
            endColor="blackAlpha.100"
            fitContent
            isLoaded={hasImageLoaded}
          >
            <Image
              w={{ base: "11rem", lg: "100%" }}
              onClick={() => dispatch.productModel.setSelectedPhoto(url)}
              border="1px"
              borderColor={url === selectedPhoto ? "blackAlpha.700" : "transparent"}
              key={url}
              aspectRatio={1}
              objectFit={"cover"}
              src={url}
            />
          </Skeleton>
        ))}
      </GridItem>
      <GridItem colSpan={{ base: 9, lg: 7 }} gap={2} as={Stack}>
        <Skeleton
          w={{ base: "100%", lg: "100%" }}
          startColor="blackAlpha.300"
          endColor="blackAlpha.100"
          fitContent
          isLoaded={hasImageLoaded}
        >
          <Image
            border="1px"
            borderColor={"blackAlpha.400"}
            onLoad={() => setHasImageLoaded.on()}
            aspectRatio={1}
            objectFit={"cover"}
            src={selectedPhoto || ""}
          />
        </Skeleton>
      </GridItem>
    </>
  );
};

export default ImageGallery;
