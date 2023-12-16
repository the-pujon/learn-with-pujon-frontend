import React, { useState } from "react";
import "./Authentication.scss";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import SignUp from "../SignUp/SignUp";
import Login from "../Login/Login";
import logo1 from "../../../assets/logos/logo1.png";
import login from "../../../assets/login.gif";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../../Hooks/useUser";

const Authentication = () => {
  const [RP, setRP] = useState(false);
  const navigate = useNavigate();
  const { loginWithEmail, loginWithGoogle, loginWithGithub } = useUser();
  //registration by google

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
    <div>
      <div className="wrapper relative ">
        <Link
          to="/"
          className="text-5xl uppercase top-10 left-0 absolute font-semibold"
        >
          <img src={logo1} alt="" className="w-44" />
        </Link>
        <div className="flex items-center justify-center flex-col h-[80vh] pt-48 text-primary">
          <div
            className={`authContainer  ${RP ? "right-panel-active" : ""}`}
            id="container"
          >
            <SignUp handleGoogleLogin={handleGoogleLogin} />
            <Login handleGoogleLogin={handleGoogleLogin} />
            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-left">
                  <h1 className="font-bold">Welcome Back!</h1>
                  <p className="text-[.85rem] font-normal leading-5 tracking-widest py-5">
                    To keep connected with us please login with your personal
                    info
                  </p>
                  <button
                    className="SVButton-2 px-4 py-2 mt-2 text-primary "
                    onClick={() => setRP(false)}
                  >
                    <span className=" text-base font-semibold ">Sign In</span>
                  </button>
                </div>
                <div className="overlay-panel overlay-right">
                  {/*<h1>Hello, Friend!</h1>*/}
                  <img src={login} alt="" className="" />
                  <p className="text-[.85rem] font-normal leading-5 tracking-widest py-5">
                    Enter your personal details and start journey with us
                  </p>
                  <button className="SVButton-2 px-4 py-2 mt-2 text-primary ">
                    <span
                      className=" text-base font-semibold "
                      onClick={() => setRP(true)}
                    >
                      Sign Up
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
