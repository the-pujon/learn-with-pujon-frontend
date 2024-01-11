import React from 'react'
import logo1 from "../../../assets/logos/logo1.png";
import {FaGoogle} from "react-icons/fa";
import {Link} from "react-router-dom";

const SignUpPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
    <div className="w-1/4 p-10 flex items-center justify-center flex-col rounded-md shadow-2xl"
    style={{
      background: 'conic-gradient(from 270deg at 0% 0%, rgba(255, 255, 255, .5) 50%, rgba(33, 53, 85, 1) 100%)'
    }}
    >

      <div>
        <img src={logo1} alt="" className="w-32" />
      </div>
      <div className="text-4xl mt-4 text-primary font-bold" >Sign Up</div>
      <form action="" className="w-full flex items-center gap-5 mt-10 flex-col" >
        <div className="form-control relative  w-full">
          <input
            autoComplete="off"
            id="name"
            name="name"
            type="name"
            className="peer placeholder-transparent h-10 w-full   bg-transparent text-secondary focus:outline-none focus:borer-rose-600 border-b-secondary/50 border-b-2"
            placeholder="name"
            required
          />
          <label
            htmlFor="name"
            className="absolute left-0 -top-3.5 text-gray-200 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-secondary peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-200 peer-focus:text-sm"
          >
            Name
          </label>
        </div>
        <div className="form-control relative   w-full">
          <input
            autoComplete="off"
            id="password"
            name="password"
            type="password"
            className="peer placeholder-transparent h-10 w-full   bg-transparent text-secondary focus:outline-none focus:borer-rose-600 border-b-secondary/50 border-b-2"
            placeholder="password"
            required
          />
          <label
            htmlFor="password"
            className="absolute left-0 -top-3.5 text-gray-200 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-secondary peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-200 peer-focus:text-sm"
          >
            Password
          </label>
        </div>

        <div className="form-control relative w-full">
            <label htmlFor="instructorImage" className="text-secondary">
              Image
            </label>
            <input
              accept="image/*"
              type="file"
              name="instructorImage"
              className="file-input file-input-ghost w-full file:border-r-2 file:border-r-secondary/50   border-t-0 border-l-0 border-r-0 rounded-none border-b-2 text-secondary text-sm border-b-secondary/50"
            //  onChange={(e) => {
            //    setUpLoadedImages(e.target.files[0]);
            //  }}
            />
          </div>

        <button className="SVButton-2 py-2 px-3 mt-3 w-full text-primary" >
          <span>Sign Up</span>
        </button>
      </form>
      <div className="divider divide-white divide-x-2 divide-y-2 text-primary">OR</div>
      <div>
          <button className="border p-2 rounded-full border-primary" >
              <FaGoogle className="text-5xl text-primary"/>
          </button>
      </div>

      <div className="text-primary mt-4" >Already have an account? <Link to={'/login'}>Login</Link></div>
    </div>
  </div>
  )
}

export default SignUpPage