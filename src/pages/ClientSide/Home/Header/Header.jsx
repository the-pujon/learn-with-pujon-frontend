import React from "react";

//import banner1 from '../../../../'
//import {banner1,banner2} from 'bannerImages'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

//import './styles.css';

// import required modules
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";
import Banner from "../Banner/Banner";
import bannerImage from "./../../../../assets/banner/index";

const Header = () => {
  return (
    <div className="flex items-center justify-center bg-[color:var(--secondaryColor)]">
      <>
        <Swiper
          loop={true}
          slidesPerView={1}
          spaceBetween={30}
          effect={"fade"}
          //navigation={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Banner image={bannerImage.banner1} title="lorem ipsum dolor" />
          </SwiperSlide>
          <SwiperSlide>
            <Banner image={bannerImage.banner2} title="lorem ipsum dolor" />
          </SwiperSlide>
          <SwiperSlide>
            <Banner image={bannerImage.banner3} title="lorem ipsum dolor" />
          </SwiperSlide>
          <SwiperSlide>
            <Banner image={bannerImage.banner4} title="lorem ipsum dolor" />
          </SwiperSlide>
          <SwiperSlide>
            <Banner image={bannerImage.banner5} title="lorem ipsum dolor" />
          </SwiperSlide>
          <SwiperSlide>
            <Banner image={bannerImage.banner6} title="lorem ipsum dolor" />
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Header;
