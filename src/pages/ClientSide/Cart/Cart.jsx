import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { removeItemFromCart } from "../../../Features/CartSlice/CartSlice";
import { Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { useUser } from "./../../../Hooks/useUser";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const [isPaymentSuccessful, setPaymentSuccessful] = useState("unpaid");
  const { loggedUser } = useUser();

  const dispatch = useDispatch();

  const handleRemove = (id) => {
    console.log("remove");
    dispatch(removeItemFromCart(id));
  };

  const makePayment = async (totalPrice) => {
    const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

    const body = {
      products: cartItems.courses,
      totalItem: cartItems.totalItem,
      totalPrice: totalPrice,
      email: loggedUser.email,
      paymentStatus: isPaymentSuccessful,
    };

    const headers = {
      "Content-Type": "application/json",
    };
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/api/checkout`,
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );

    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error);
    }
  };

  return (
    <div>
      <div className="container mx-auto min-h-screen sm:min-h-screen pt-16 pb-5 sm:pb-0 sm:pt-0 flex items-center justify-center w-full text-primary">
        <div className="flex flex-col sm:flex-row shadow-md w-full py-5">
          <div className="w-full sm:w-3/4 bg-transparent backdrop-blur-md sm:border-r-2 px-5 sm:px-10 py-5 sm:py-10">
            <div className="flex justify-between border-b gap-3 border-primary pb-4 sm:pb-8">
              <h1 className="font-semibold text-xl sm:text-2xl whitespace-nowrap">
                Your Selected Courses :
              </h1>
              <h2 className="font-semibold text-xl sm:text-2xl whitespace-nowrap">
                {cartItems.totalItem} Items
              </h2>
            </div>
            {cartItems.courses.length === 0 ? (
              <div className="w-full flex gap-2 flex-col items-center justify-center h-full">
                <p className="text-center text-primary text-2xl">
                  You didn't added any courses in you cart
                </p>
                <p>
                  Want to enroll any course you desire?{" "}
                  <Link to={"/courses"} className="SVButton-2 py-2 px-3">
                    <span>Enroll Now</span>
                  </Link>{" "}
                </p>
              </div>
            ) : (
              <div className="w-full overflow-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>Course</th>
                      <th>Instructor</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.courses?.map((course, i) => (
                      <tr key={i}>
                        <td>
                          <div className="flex items-center space-x-3">
                            <div className="avatar">
                              <div className="mask mask-squircle w-12 h-12">
                                <img
                                  src={course?.classImage}
                                  alt="Avatar Tailwind CSS Component"
                                />
                              </div>
                            </div>

                            <div>
                              <div className="font-bold">{course.name}</div>
                              <div className="text-sm text-gray-500">
                                {course.category}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center space-x-3">
                            <div>
                              <div className="font-bold">
                                {course.instructorName}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="font-semibold">$ {course.price}</td>

                        <td>
                          <button
                            onClick={() => handleRemove(course._id)}
                            className="text-center w-1/5 font-semibold text-sm"
                          >
                            <AiFillDelete className="text-2xl" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {cartItems.courses.length === 0 || (
              <Link
                to="/courses"
                className=" hidden sm:flex font-semibold text-primary text-sm mt-10"
              >
                <svg
                  className="fill-current mr-2 text-primary w-4"
                  viewBox="0 0 448 512"
                >
                  <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                </svg>
                Continue Shopping
              </Link>
            )}
          </div>

          <div
            id="summary"
            className="w-full sm:w-1/4 px-5 sm:px-8 sm:py-10 backdrop-blur-md"
          >
            <h1 className="font-semibold text-xl sm:text-2xl border-b border-primary pb-3 sm:pb-8">
              Order Summary
            </h1>
            <div className="flex justify-between mt-3 mb-3 sm:mt-10 sm:mb-5">
              <span className="font-semibold text-sm uppercase">Subtotal</span>
              <span className="font-semibold text-sm">
                $ {cartItems.totalPrice}
              </span>
            </div>
            <div className="flex justify-between  mt-3 mb-3 sm:mt-10 sm:mb-5">
              <span className="font-semibold text-sm uppercase">Tax (10%)</span>
              <span className="font-semibold text-sm">
                $ {(cartItems.totalPrice * 0.1).toFixed(2)}
              </span>
            </div>

            <div className="border-t border-primary mt-2 sm:mt-8">
              <div className="flex font-semibold justify-between py-2 sm:py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>
                  $ {cartItems.totalPrice + cartItems.totalPrice * 0.1}
                </span>
              </div>
              <button
                onClick={() => {
                  makePayment(
                    cartItems.totalPrice + cartItems.totalPrice * 0.1
                  );
                }}
                className=" SVButton-2 py-2 uppercase w-full"
              >
                <span> Checkout</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
