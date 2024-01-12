import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import CourseCard from "../CourseCard/CourseCard";

export default function CourseSlider({ instructorCourses }) {
  return (
    <>
      <Swiper
          slidesPerView={1}
          spaceBetween={0}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper items-center justify-center !flex md:!hidden "
        >
          {instructorCourses.map((course) => (
            <SwiperSlide key={course._id}>
              <CourseCard card={course} />
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          slidesPerView={4}
          spaceBetween={0}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper items-center justify-center !hidden md:!flex "
        >
          {instructorCourses.map((course) => (
            <SwiperSlide key={course._id}>
              <CourseCard card={course} />
            </SwiperSlide>
          ))}
        </Swiper>
    </>
  );
}
