import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useParams } from "react-router-dom";
import useApi from "../../../Hooks/useApi";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../../Features/CartSlice/CartSlice";
import CourseSlider from "../../../Components/CourseSlider/CourseSlider";

const CourseDetails = () => {
  const id = useParams().id;
  const { get } = useApi();

  const [cardData, setCardData] = useState([]);
  const [sameCategoryCourses, setSameCategoryCourses] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    get(`courses/${id}`).then((res) => {
      if (res.error) return console.log(res.error);
      setCardData(res);

      //getting smiler courses
      get(`courses/category/${res?.classCategory}`).then((result) => {
        const courses = result.filter((r) => r._id !== res._id); //removing current course that is already showing
        setSameCategoryCourses(courses);
      });
    });
  }, []);

  //adding in cart
  const handleAddToCart = () => {
    const cart = {
      _id: cardData._id,
      name: cardData.name,
      category: cardData.classCategory,
      instructorName: cardData.instructor.name,
      price: cardData.price,
      classImage: cardData.classImage,
    };

    dispatch(addItemToCart(cart));
  };

  return (
    <div className="wrapper min-h-screen text-primary">
      <div className="flex gap-4 pt-32 pb-5">
        <div className="basis-3/4 h-full overflow-auto">
          <div>
            <img
              alt="Instructor"
              className="w-full h-[35rem]"
              src={cardData?.classImage}
            />
          </div>

          <div className="text-5xl py-3 font-semibold">{cardData?.name}</div>

          <div className="flex items-center space-x-10 mb-6">
            <img
              alt="Instructor"
              className="w-20 h-20 rounded-full"
              height="80"
              src={cardData?.instructor?.instructorImage}
              style={{
                aspectRatio: "80/80",
                objectFit: "cover",
              }}
              width="80"
            />
            <div>
              <div className="text-sm text-gray-500">Instructor</div>
              <div className="text-lg font-semibold">
                {cardData?.instructor?.name}
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Category</div>
              <div className="text-lg font-semibold">
                {cardData?.instructor?.category}
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Experience</div>
              <div className="text-lg font-semibold">
                {cardData?.instructor?.experience} years
              </div>
            </div>
          </div>

          {/*tabs*/}

          <div>
            <Tabs>
              <TabList>
                <Tab>Overview</Tab>
                <Tab>Curriculum</Tab>
                <Tab>Requirements</Tab>
              </TabList>
              <TabPanel>
                {/*<h2>Overview</h2>*/}
                <div>
                  <li className="text-xl font-medium">Description</li>
                  <p className="pl-7">
                    {cardData.description
                      ? cardData.description
                      : "No Description"}
                  </p>
                </div>
                <div>
                  <li className="text-xl font-medium">Our Target Audience</li>
                  <p className="pl-7">
                    {cardData?.targetAudience?.map((TA, i) => (
                      <li key={i}>{TA}</li>
                    ))}
                  </p>
                </div>
                <div>
                  <li className="text-xl font-medium">Why need this course</li>
                  <p className="pl-7">{cardData?.whyYouNeedThisCourse}</p>
                </div>
              </TabPanel>
              <TabPanel>
                <div>
                  <li className="text-xl font-medium">Our Curriculum</li>
                  <p className="pl-7">
                    {cardData?.curriculum?.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </p>
                </div>
              </TabPanel>
              <TabPanel>
                <div>
                  <li className="text-xl font-medium">
                    Minimum Requirements for this course
                  </li>
                  <p className="pl-7">
                    {cardData?.requirements?.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </p>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
        <div className="basis-1/4 max-h-screen h-[90vh] overflow-auto sticky top-32">
          <div>
            <div className="text-2xl font-medium text-primary py-2">
              Course Details
            </div>
            <div>
              <div className="py-1 px-2 flex justify-between items-center border-b">
                <span>Duration</span>
                <span>{cardData?.duration}</span>
              </div>
              <div className="py-1 px-2 flex justify-between items-center border-b">
                <span>Total Lessons</span>
                <span>{cardData?.totalLessons}</span>
              </div>{" "}
              <div className="py-1 px-2 flex justify-between items-center border-b">
                <span>Total Quizzes</span>
                <span>{cardData?.totalQuizzes}</span>
              </div>{" "}
              <div className="py-1 px-2 flex justify-between items-center border-b">
                <span>Tags</span>
                <span title={cardData?.tags}>
                  {cardData?.tags?.slice(0, 2).join(", ")}...
                </span>
              </div>{" "}
              <div className="py-1 px-2 flex justify-between items-center border-b">
                <span>Category</span>
                <span>{cardData?.classCategory}</span>
              </div>{" "}
              <div className="py-1 px-2 flex justify-between items-center border-b">
                <span>Subcategory</span>
                <span>{cardData?.classSubCategory}</span>
              </div>
            </div>
          </div>

          <div className=" p-8 shadow-lg">
            <div className="relative mb-6">
              <img
                alt="Course"
                className="w-full h-auto"
                height="250"
                src={cardData?.classImage}
                style={{
                  aspectRatio: "350/250",
                  objectFit: "cover",
                }}
                width="350"
              />
            </div>
            <div className="text-4xl font-bold mb-4">${cardData?.price}</div>
            <button
              onClick={handleAddToCart}
              className="py-2 px-4 mb-8 SVButton-2"
            >
              Add to cart
            </button>
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Course Description</h3>
              <p className="text-sm">
                {cardData?.description?.slice(0, 150)}...
              </p>
            </div>
          </div>
        </div>
      </div>

      {sameCategoryCourses?.length > 0 &&
        <div>
          <h1 className="text-4xl mb-4 text-primary font-semibold mt-20">
            You may also like this courses
          </h1>
          <div>
            <CourseSlider instructorCourses={sameCategoryCourses} />
          </div>
        </div>
      }
    </div>
  );
};

export default CourseDetails;
