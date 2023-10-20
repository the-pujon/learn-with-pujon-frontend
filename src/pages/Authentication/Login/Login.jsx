import React from "react";
import { useState } from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useUser } from "./../../../Hooks/useUser";
const Login = ({ handleGoogleLogin }) => {
  const { loginWithEmail, loginWithGoogle, loginWithGithub } = useUser();

  const location = useLocation();

  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handSignIn = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    //login with email
    loginWithEmail(email, password)
      .then((result) => {
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        setError(true);
      });
  };

  return (
    <div>
      <div className="form-container sign-in-container">
        <form className="authForm" action="#" onSubmit={handSignIn}>
          <h1 className="font-bold text-xl">Sign in</h1>
          <div className="social-container">
            <button className="social">
              <FaFacebook className="text-2xl" />
            </button>
            <button
              className="social"
              onClick={(e) => {
                e.preventDefault();
                handleGoogleLogin();
              }}
            >
              <FaGoogle className="text-2xl" />
            </button>
            <button className="social">
              <FaGithub className="text-2xl" />
            </button>
          </div>
          <span>or use your account</span>
          <input
            className="authInput"
            type="email"
            name="email"
            placeholder="Email"
          />
          <input
            className="authInput"
            type="password"
            name="password"
            placeholder="Password"
          />
          {/*<a href="#">Forgot your password?</a>*/}
          <button className="SVButton-2 text-primary px-4 py-2 mt-2 ">
            <span className=" text-base font-semibold ">Sign In</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
