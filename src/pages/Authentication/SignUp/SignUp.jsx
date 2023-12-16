import React from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { useUser } from "../../../Hooks/useUser";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../Firebase/firebase.config";
import { updateProfile } from "firebase/auth";
const SignUp = ({ handleGoogleLogin }) => {
  const { registrationWithEmail, loginWithGoogle, loginWithGithub } = useUser();

  const navigate = useNavigate();

  //registration by email
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.email.value;
    const photoURL = form[6].files[0];

    const apiKey = "3771a5eec87b0ec98c5b62855eab4fae";
    const apiUrl = "https://api.imgbb.com/1/upload";

    const formData = new FormData();
    formData.append("image", photoURL);

    fetch(`${apiUrl}?key=${apiKey}`, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to upload image");
        }
      })
      .then((data) => {
        registrationWithEmail(email, password)
          .then((res) => {
            updateProfile(auth.currentUser, {
              displayName: name,
              photoURL: data.data.url,
            })
              .then((res) => {
                fetch("https://sv-ashen.vercel.app/api/users", {
                  method: "POST",
                  headers: { "Content-type": "application/json" },
                  body: JSON.stringify({
                    name,
                    email,
                    password,
                    image: data.data.url,
                  }),
                })
                  .then((res) => res.json())
                  .then((d) => {
                    navigate("/");
                  })
                  .catch((err) => console.error(err));
              })
              .catch((err) => console.error(err));
          })
          .catch((err) => console.error(err));
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });
  };

  return (
    <div>
      <div className="form-container sign-up-container">
        <form className="authForm" onSubmit={handleSubmit}>
          <h1 className="font-bold">Create Account</h1>
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
          <span>or use your email for registration</span>
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="authInput"
          />
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
          <input
            type="file"
            name="file"
            className="file-input file-input-ghost text-gray-400 authInput rounded-none w-full max-w-xs"
          />

          <button
            type="submit"
            className="SVButton-2 px-4 py-2 mt-2 text-primary "
          >
            <span className=" text-base font-semibold ">Sign Up</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
