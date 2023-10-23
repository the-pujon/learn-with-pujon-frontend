import React from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../Features/CartSlice/CartSlice";

const CourseCard = (card) => {
  //console.log(card?.card.card?.card);
  //console.log(card.card)
  console.log(card);

  const dispatch = useDispatch();

  // ... (your existing code)

  const handleAddToCart = () => {
    const cart = {
      _id: card.card._id,
      name: card.card.name,
      category: card.card.classCategory,
      instructorName: card.card.instructor.name,
      price: card.card.price,
      classImage: card.card.classImage,
    };

    dispatch(addItemToCart(cart));
  };

  return (
    <div>
      <div className=" ">
        <div className=" relative w-full md:w-[23rem] bg-secondary rounded   shadow-lg  ">
          <p className="absolute top-4 right-4 font-semibold px-2 py-1 text-primary bg-secondary rounded-full shadow-sm">
            ${card?.card?.price}
          </p>
          <div className=" h-2/4 sm:h-64 overflow-hidden">
            <img
              className="w-full rounded-t"
              src={card?.card?.classImage}
              alt="Photo by aldi sigun on Unsplash"
            />
            <p className="absolute top-48 right-4 font-semibold px-2 py-1 text-primary bg-secondary rounded-full shadow-sm">
              <span className="flex items-center gap-2 justify-center">
                <FaStar className="text-primary" /> {card?.card?.rating}
              </span>
            </p>
          </div>
          <div className="flex justify-start px-5 -mt-14">
            <span className="flex relative h-32">
              <img
                alt="Photo by aldi sigun on Unsplash"
                src={card?.card?.instructor?.instructorImage}
                className="mx-auto object-cover rounded-full h-[5.5rem] w-[5.5rem] bg-secondary p-1"
              />
              <span className="mt-14 ml-2 italic text-primary/60">
                This Course will take by {card?.card?.instructor?.name}
              </span>
            </span>
          </div>
          <div className="">
            <div className="px-7 pb-7 mb-8">
              <h2 className="text-3xl font-bold text-primary ">
                {card?.card.name}
              </h2>
              <p className="text-primary mt-2 ">{card?.card?.classCategory}</p>
              {/*<p className="text-primary mt-2 ">
                Seats Available: {seatsAvailable}
              </p>*/}
              <p className="text-primary mt-2 ">
                {/*Total Students: {totalStudents}*/}
              </p>

              <div className="flex gap-4 items-center mt-2">
                <button className="justify-center px-4 py-2 cursor-pointer w-fit border border-primary hover:bg-primary hover:text-secondary transition-colors duration-300">
                  Course Details
                </button>{" "}
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
