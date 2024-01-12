import React, { useState } from "react";
import logo1 from "../../../assets/logos/logo1.png";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useUser } from "../../../Hooks/useUser";
import { toast } from "react-hot-toast";
import {  useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { loginWithEmail, loginWithGoogle, loginWithGithub } = useUser();

  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    //login with email
    loginWithEmail(email, password)
      .then((result) => {
        toast.success("Login Successful", { position: "top-right" });
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Wrong email or password", { position: "top-right" });
        setError(true);
      });
  };

  const handleGoogleLogin = () => {
    console.log("sd");
    loginWithGoogle()
      .then((res) => {
        const { displayName, email, photoURL } = res.user;

        fetch(`https://sv-ashen.vercel.app/api/users/${email}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data) {
              navigate("/");
            } else {
              fetch("https://sv-ashen.vercel.app/api/users", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({
                  name: displayName,
                  email: email,
                  image: photoURL,
                }),
              })
                .then((res) => res.json())
                .then((data) => {
                  console.log(data);
                  navigate("/");
                })
                .catch((err) => console.error(err));
            }
          });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className="w-1/4 p-10 flex items-center justify-center flex-col rounded-md shadow-2xl"
        style={{
          background:
            "conic-gradient(from 270deg at 0% 0%, rgba(255, 255, 255, .5) 50%, rgba(33, 53, 85, 1) 100%)",
        }}
      >
        <div>
          <img src={logo1} alt="" className="w-32" />
        </div>
        <div className="text-4xl mt-4 text-primary font-bold">Login</div>
        <form
          action=""
          className="w-full flex items-center gap-5 mt-10 flex-col"
          onSubmit={handleLogin}
        >
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

          <button className="SVButton-2 py-2 px-3 mt-3 w-full text-primary">
            <span>Login</span>
          </button>
        </form>
        <div className="divider divide-white divide-x-2 divide-y-2 text-primary">
          OR
        </div>
        <div>
          <button onClick={handleGoogleLogin} className="border p-2 rounded-full border-primary">
            <FaGoogle className="text-5xl text-primary" />
          </button>
        </div>

        <div className="text-primary mt-4">
          Do not have an account? <Link to={"/signup"}>Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
