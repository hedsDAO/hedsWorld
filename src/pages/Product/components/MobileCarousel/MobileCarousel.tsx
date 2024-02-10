import { Box, GridItem, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useRef } from "react";

const MobileCarousel = ({ images }: { images: string[] }) => {
  const swiperRef = useRef<any>(null); // Step 1: Create a ref for the Swiper instance

  const navigateToSlide = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index); // Step 4: Navigate to the desired slide
    }
  };
  
  return (
    <Box w="full" maxH="65vh" minW="91.5vw" mx="auto" overflowX="hidden" borderRadius="lg">
      <Swiper
        slidesPerView={1}
        navigation
        modules={[Pagination]}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Step 2: Assign the Swiper instance to the ref
        onSlideChange={() => {}}
      >
        {images.map((image: string, index: number) => (
          <SwiperSlide key={index}>
            <Box mixBlendMode={"difference"} position={"absolute"}>
              <Text fontFamily={"inter"} letterSpacing={"widest"} fontSize={{ base: "9px", lg: "2xs" }} textColor={"white"} pt={1.5} ml={{ base: 2, lg: 2.5 }}>{`[${index + 1} / ${
                images.length
              }]`}</Text>
            </Box>
            <Image aspectRatio={1} src={image} alt={image} objectFit={"cover"} w="full" h="full" />
          </SwiperSlide>
        ))}
      </Swiper>
      <SimpleGrid mt={2} mb={2} gap={1} columns={images?.length}>
        {images?.map((url: string, index: number) => {
          return (
            <GridItem onClick={() => navigateToSlide(index)} colSpan={1}>
              <Image objectFit={"cover"} aspectRatio={1} src={url} />
            </GridItem>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default MobileCarousel;
