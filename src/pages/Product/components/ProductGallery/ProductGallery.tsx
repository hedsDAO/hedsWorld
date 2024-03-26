import { Box, GridItem, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useRef } from "react";
import { Image as ImageProps } from "shopify-buy";
import { useSelector } from "react-redux";
import { store } from "@/store/store";

const ProductGallery = ({ images }: { images: ImageProps[] }) => {
  const swiperRef = useRef<any>(null); // Step 1: Create a ref for the Swiper instance
  const selectedVariant = useSelector(store.select.productModel.selectVariant);
  const product = useSelector(store.select.productModel.selectProduct);

  const navigateToSlide = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index); // Step 4: Navigate to the desired slide
    }
  };

  useEffect(() => {
    if (selectedVariant !== null) {
      const variantData = product?.variants?.[selectedVariant];
      if (variantData) {
        const imageSrc = variantData?.image?.src;
        const imageIndex = images.findIndex((image) => image.src === imageSrc);
        if (imageIndex !== -1) {
          navigateToSlide(imageIndex);
        }
      }
    }
  }, [selectedVariant]);

  return (
    <Box w="100%" maxH={{ base: "65vh", lg: "100%" }} minW={{ base: "91.5vw", lg: "32rem" }} mx={{ base: "auto", lg: "0" }} borderRadius="sm">
      <Swiper
        slidesPerView={1}
        navigation
        modules={[Pagination]}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Step 2: Assign the Swiper instance to the ref
        onSlideChange={() => {}}
      >
        {images.map((image: ImageProps, index: number) => (
          <SwiperSlide key={index}>
            <Box mixBlendMode={"difference"} position={"absolute"}>
              <Text fontFamily={"inter"} letterSpacing={"widest"} fontSize={{ base: "9px", lg: "2xs" }} textColor={"white"} pt={1.5} ml={{ base: 2, lg: 2.5 }}>{`[${index + 1} / ${images.length}]`}</Text>
            </Box>
            <Image aspectRatio={1} src={image.src} alt={image?.altText} objectFit={"cover"} />
          </SwiperSlide>
        ))}
      </Swiper>
      <SimpleGrid mt={2} mb={2} gap={1} columns={images?.length}>
        {images?.map((url: ImageProps, index: number) => {
          return (
            <GridItem key={url.id} onClick={() => navigateToSlide(index)} colSpan={1}>
              <Image objectFit={"cover"} aspectRatio={1} src={url.src} />
            </GridItem>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default ProductGallery;
