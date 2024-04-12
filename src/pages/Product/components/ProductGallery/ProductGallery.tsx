import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Box, GridItem, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { Image as ImageProps } from "shopify-buy";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { store } from "@/store/store";
import * as styles from "@/pages/Product/components/ProductGallery/styles";
import "swiper/css";
import "swiper/css/pagination";

/**
 * @name ProductGallery
 * @description This component is responsible for rendering the product gallery.
 * @returns {JSX.Element} JSX.Element
 */

const ProductGallery = ({ images }: { images: ImageProps[] }) => {
  const swiperRef = useRef<any>(null);
  const selectedVariant = useSelector(store.select.productModel.selectVariant);
  const product = useSelector(store.select.productModel.selectProduct);

  const navigateToSlide = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
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
    <Box {...styles.$boxStyles}>
      <Swiper
        slidesPerView={1}
        navigation
        modules={[Pagination]}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={() => {}}
      >
        {images?.map((image: ImageProps, index: number) => (
          <SwiperSlide key={index}>
            <Box {...styles.$boxStyles2}>
              <Text {...styles.$textStyles}>{`[${index + 1} / ${images.length}]`}</Text>
            </Box>
            <Image {...styles.$imageStyles} src={image.src} alt={image?.altText} />
          </SwiperSlide>
        ))}
      </Swiper>
      <SimpleGrid {...styles.$simpleGridStyles}>
        {images?.map((url: ImageProps, index: number) => (
          <GridItem key={url.id} onClick={() => navigateToSlide(index)} {...styles.$gridItemStyles}>
            <Image {...styles.$imageStyles} src={url.src} />
          </GridItem>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProductGallery;
