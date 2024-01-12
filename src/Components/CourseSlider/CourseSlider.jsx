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
        slidesPerView={4}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {instructorCourses?.map((course) => (
          <SwiperSlide>
            <CourseCard card={course} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
