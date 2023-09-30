import React, { useEffect, useState } from "react";

//import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
//import ClassCard from "../../Shared/ClassCard/ClassCard";
import { Fade } from "react-awesome-reveal";
import CourseCard from "../../../../Components/CourseCard/CourseCard";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const PopularCourses = () => {
  const [popularClasses, setPopularClasses] = useState([]);

  useEffect(() => {
    fetch("/Courses.json")
      .then((res) => res.json())
      .then((data) => {
        const sliceData = data.slice(0, 6);

        setPopularClasses(sliceData);
      })
      .catch((err) => console.error(err));
  }, []);

  console.log(popularClasses);

  return (
    <div className="my-20">
      {/*<SectionTitle title1="Popular Classes" />*/}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-fit gap-8 mx-auto">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {/*<SwiperSlide>Slide 1</SwiperSlide>*/}

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
