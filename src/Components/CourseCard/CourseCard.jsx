import React from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../Features/CartSlice/CartSlice";
import { Link } from "react-router-dom";

const CourseCard = ({ card }) => {
  const dispatch = useDispatch();

  //for adding in cart
  const handleAddToCart = () => {
    const cart = {
      _id: card._id,
      name: card.name,
      category: card.classCategory,
      instructorName: card.instructor.name,
      price: card.price,
      classImage: card.classImage,
    };

    dispatch(addItemToCart(cart));
  };

  return (
    <div>
      <div className="">
        <div className=" relative w-full md:w-[23rem] h-full bg-secondary rounded   shadow-lg  ">
          <p className="absolute top-4 right-4 font-semibold px-2 py-1 text-primary bg-secondary rounded-full shadow-sm">
            ${card?.price}
          </p>
          <div className="h-56 sm:h-56 overflow-hidden">
            <img
              className="w-full rounded-t"
              src={card?.classImage}
              alt="course Photo"
            />
            <p className="absolute top-48 right-4 font-semibold px-2 py-1 text-primary bg-secondary rounded-full shadow-sm">
              <span className="flex items-center gap-2 justify-center">
                <FaStar className="text-primary" /> {card?.rating}
              </span>
            </p>
          </div>
          <div className="flex justify-start px-5 -mt-14">
            <span className="flex relative h-32">
              <img
                alt="Photo by aldi sigun on Unsplash"
                src={card?.instructor?.instructorImage}
                className="mx-auto object-cover rounded-full h-[5.5rem] w-[5.5rem] bg-secondary p-1"
              />
              <span className="mt-14 ml-2 italic text-primary/60">
                This Course will take by {card?.instructor?.name}
              </span>
            </span>
          </div>
          <div className="">
            <div className="px-7 pb-7 mb-8">
              <h2 className="text-3xl font-bold text-primary ">
                {card?.name?.length > 16 ? (
                  <>{card?.name?.slice(0, 16)}...</>
                ) : (
                  <>{card?.name}</>
                )}
              </h2>
              <p className="text-primary mt-2 ">{card?.classSubCategory}</p>
              <p className="text-primary mt-2 ">
              </p>

              <div className="flex gap-4 items-center mt-2">
                <Link to={`/courseDetails/${card?._id}`}>
                  <button className="justify-center px-4 py-2 cursor-pointer w-fit border border-primary hover:bg-primary hover:text-secondary transition-colors duration-300">
                    Course Details
                  </button>{" "}
                </Link>
                <button
                  onClick={handleAddToCart}
                  className="justify-center px-4 py-2 cursor-pointer w-fit border border-primary hover:bg-primary hover:text-secondary transition-colors duration-300"
                >
                  Select Course
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
