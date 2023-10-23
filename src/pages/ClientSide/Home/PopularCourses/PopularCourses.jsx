import React, { useEffect, useState } from "react";
import CourseCard from "../../../../Components/CourseCard/CourseCard";

import { FaCircle } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";

const PopularCourses = () => {
  const [popularClasses, setPopularClasses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/courses")
      .then((res) => res.json())
      .then((data) => {
        const sliceData = data.slice(0, 6);

        setPopularClasses(sliceData);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="my-20 ">
      <div className="wrapper ">
        <div className="flex items-center justify-center flex-col mb-5">
          <p className="uppercase tracking-wider flex gap-2 items-center">
            <FaCircle className="text-[.5rem]" />{" "}
            <FaCircle className="text-[.6rem]" />{" "}
            <FaCircle className="text-xs" />
            Learn new skills
            <FaCircle className="text-xs" />{" "}
            <FaCircle className="text-[.6rem]" />{" "}
            <FaCircle className="text-[.5rem]" />
          </p>
          <h1 className="text-6xl">
            <b>Popular</b> Courses.
          </h1>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper items-center justify-center !flex md:!hidden "
        >
          {popularClasses.map((card) => (
            <SwiperSlide key={card._id}>
              <CourseCard card={card} />
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          slidesPerView={4}
          spaceBetween={0}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper items-center justify-center !hidden md:!flex "
        >
          {popularClasses.map((card) => (
            <SwiperSlide key={card._id}>
              <CourseCard card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PopularCourses;
