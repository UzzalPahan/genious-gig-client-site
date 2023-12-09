import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper cursor-pointer my-10 rounded-md"
      >
        <SwiperSlide className="relative">
          <img
            className="brightness-50"
            src="https://i.ibb.co/F45XnSM/Graphic-Design-Service-Banner-Design.jpg"
            alt=""
          />
          
        </SwiperSlide>

        <SwiperSlide className="relative">
          <img
            className="brightness-50"
            src="https://i.ibb.co/BVS6BdC/pexels-photo-845451.jpg"
            alt=""
          />
          
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            className="brightness-50"
            src="https://i.ibb.co/DgYBGQt/stock-photo-cheerful-multiethnic-businesspeople-showing-yeah-gesture-computer-colorful-swatches-coff.jpg"
            alt=""
          />
          
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
