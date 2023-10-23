import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { removeItemFromCart } from "../../../Features/CartSlice/CartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems);

  const dispatch = useDispatch();

  const handleRemove = (id) => {
    console.log("remove");
    dispatch(removeItemFromCart(id));
  };

  return (
    <div>
      {" "}
      <div class="container mx-auto min-h-[70vh] flex items-center justify-center w-full text-primary">
        <div class="flex shadow-md w-full">
          <div class="w-3/4 bg-transparent backdrop-blur-md border-r-2 px-10 py-10">
            <div class="flex justify-between border-b pb-8">
              <h1 class="font-semibold text-2xl">Your Orders</h1>
              <h2 class="font-semibold text-2xl">
                {cartItems.totalItem} Items
              </h2>
            </div>
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Course</th>
                  <th>Instructor</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.courses?.map((course) => (
                  <tr key={course._id}>
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
                        class="text-center w-1/5 font-semibold text-sm"
                      >
                        <AiFillDelete />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <a
              href="#"
              class="flex font-semibold text-indigo-600 text-sm mt-10"
            >
              <svg
                class="fill-current mr-2 text-indigo-600 w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Shopping
            </a>
          </div>

          <div id="summary" class="w-1/4 px-8 py-10 backdrop-blur-md">
            <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
            <div class="flex justify-between mt-10 mb-5">
              <span class="font-semibold text-sm uppercase">Subtotal</span>
              <span class="font-semibold text-sm">
                $ {cartItems.totalPrice}
              </span>
            </div>
            <div class="flex justify-between mt-10 mb-5">
              <span class="font-semibold text-sm uppercase">Tax (10%)</span>
              <span class="font-semibold text-sm">
                $ {(cartItems.totalPrice * 0.1).toFixed(2)}
              </span>
            </div>

            <div class="border-t mt-8">
              <div class="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>
                  $ {cartItems.totalPrice + cartItems.totalPrice * 0.1}
                </span>
              </div>
              <button class=" SVButton-2 py-2 uppercase w-full">
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
