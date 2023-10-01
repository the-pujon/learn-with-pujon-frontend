import React, { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "swiper/css/effect-coverflow";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import InstructorCard from "../../../../Components/InstructorCard/InstructorCard";
import { FaCircle } from "react-icons/fa";

const PopularInstructors = () => {
  const [popularInstructor, setPopularInstructor] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/instructors")
      .then((res) => res.json())
      .then((data) => {
        const sliceData = data.slice(0, 6);

        setPopularInstructor(sliceData);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <div className="my-10 wrapper ">
        <div className="flex items-center justify-center flex-col">
          <p className="uppercase tracking-wider flex gap-2 items-center">
            <FaCircle className="text-[.5rem]" />{" "}
            <FaCircle className="text-[.6rem]" />{" "}
            <FaCircle className="text-xs" />
            Meet Our Genius Instructors
            <FaCircle className="text-xs" />{" "}
            <FaCircle className="text-[.6rem]" />{" "}
            <FaCircle className="text-[.5rem]" />
          </p>
          <h1 className="text-6xl">
            <b>Popular</b> Courses.
          </h1>
        </div>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 0,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper w-11/12 mx-auto !block md:!hidden"
        >
          {popularInstructor.map((card) => (
            <SwiperSlide key={card._id}>
              <InstructorCard
                img={card.image}
                name={card.name}
                email={card.name}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          initialSlide={2}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 10,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper   w-11/12 mx-auto !hidden md:!block "
        >
          {popularInstructor.map((card) => (
            <SwiperSlide key={card._id}>
              <InstructorCard
                img={card.image}
                name={card.name}
                email={card.name}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {/*{popularInstructor.map((card) => (
            <div key={card._id}>
              <InstructorCard
                img={card.image}
                name={card.name}
                email={card.name}
              />
            </div>
          ))}*/}
      </div>
    </div>
  );
};

export default PopularInstructors;
