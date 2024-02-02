import { Box, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import "swiper/css";
// import 'swiper/css/navigation';
import 'swiper/css/pagination';

const MobileCarousel = ({ images }: { images: string[] }) => {
  return (
    <Box w="full" maxH="65vh" minW="95vw" mx="auto" overflowX="hidden" borderRadius="lg">
      <Swiper
        slidesPerView={1}
        navigation
        
        modules={[Pagination]}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {images.map((image: string, index: number) => (
          <SwiperSlide key={index}>
            <Image aspectRatio={1} src={image} alt={image} objectFit={"cover"} w="full" h="full" />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default MobileCarousel;
