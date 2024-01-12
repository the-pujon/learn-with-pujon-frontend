import React, { useEffect, useState } from "react";
import { useUser } from "../../../../Hooks/useUser";
import { useNavigate } from "react-router-dom";
import upImage from "../../../../assets/upImage.svg";
import useApi from './../../../../Hooks/useApi';

const BecomeInstructor = () => {
  const { loggedUser } = useUser();
  const navigate = useNavigate();

  const [upLoadedImages, setUpLoadedImages] = useState(null);

  const [category, setCategory] = useState([]);
  const {get, post} = useApi()

  useEffect(() => {
    get('categories')
      .then((data) => {
        setCategory(data);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const data = {
      name: form.name.value,
      email: form.instructorEmail.value,
      //  instructorImage: upLoadedImages,
      category: form.category.value,
      education: form.education.value,
      about: form.about.value,
      experience: form.experience.value,
      phone: form.phone.value,
      address: form.address.value,
    };

    const apiKey = import.meta.env.VITE_IMGBB_API_KEY;
    const apiUrl = import.meta.env.VITE_IMGBB_API_URL;

    const formData = new FormData();
    formData.append("image", upLoadedImages);

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
      .then((d) => {
        data.instructorImage = d.data.url;

        post("instructors", data, 'BecomeInstructor')
          .then((data) => {
            navigate("/instructors");
          })
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });
  };

  return (
    <div className="">
      <div className="flex flex-col sm:flex-row wrapper min-h-screen pt-16 gap-4 items-center justify-center">
        <div className="flex-1 pt-5 sm:pt-0 flex items-center justify-center ">
          {upLoadedImages ? (
            <img
              src={URL.createObjectURL(upLoadedImages)}
              alt=""
              className="w-44 sm:w-80 rounded-full p-5"
            />
          ) : (
            <div className="border border-primary w-44 sm:w-80  h-44 sm:h-80 rounded-full flex items-center justify-center">
              {" "}
              <img src={upImage} alt="" className="  p-5 w-32 sm:w-52" />
            </div>
          )}
        </div>
        <form
          className="flex-1 p-5 rounded-3xl bg-primary/20 "
          style={{
            background:
              "conic-gradient(from 270deg at 0% 0%, rgba(255, 255, 255, 1) 20%,#213555  100% )",
          }}
          onSubmit={handleSubmit}
        >
          {/* name */}
          <div className="form-control relative my-6">
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

          {/* instructorEmail */}
          <div className="form-control relative my-6 mt-12">
            <input
              autoComplete="off"
              id="instructorEmail"
              name="instructorEmail"
              type="text"
              value={loggedUser?.email}
              disabled
              className="peer placeholder-transparent h-10 w-full   bg-transparent text-secondary focus:outline-none focus:borer-rose-600 border-b-secondary/50 border-b-2"
              placeholder="instructorEmail"
              required
            />
            <label
              htmlFor="instructorEmail"
              className="absolute left-0 -top-3.5 text-gray-200 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-secondary peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-200 peer-focus:text-sm"
            >
              Instructor Email
            </label>
          </div>

          {/* Instructor Image */}
          <div className="form-control relative my-6 ">
            <label htmlFor="instructorImage" className="text-secondary">
              Image
            </label>
            <input
              accept="image/*"
              type="file"
              name="instructorImage"
              className="file-input file-input-ghost w-full file:border-r-2 file:border-r-secondary/50   border-t-0 border-l-0 border-r-0 rounded-none border-b-2 text-secondary text-sm border-b-secondary/50"
              onChange={(e) => {
                setUpLoadedImages(e.target.files[0]);
              }}
            />
          </div>

          {/* About */}
          <div className="form-control relative my-6 mt-12">
            <textarea
              autoComplete="off"
              id="about"
              name="about"
              type="text"
              className="peer placeholder-transparent h-10 w-full   bg-transparent text-secondary focus:outline-none focus:borer-rose-600 border-b-secondary/50 border-b-2"
              placeholder="about"
              required
            />
            <label
              htmlFor="about"
              className="absolute left-0 -top-3.5 text-gray-200 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-secondary peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-200 peer-focus:text-sm"
            >
              About Yourself
            </label>
          </div>
          <div className="flex items-center gap-2">
            {/* category */}
            <div className="form-control relative my-6 w-full">
              <select
                //onChange={handleCategory}
                id="category"
                className="select select-ghost w-full max-w-xs border-t-0 border-l-0 border-r-0 rounded-none border-b-2 text-secondary text-sm border-b-secondary/50 outline-none appearance-none"
              >
                <option disabled selected>
                  Category
                </option>
                {category.map((c) => (
                  <option
                    value={c.CategoryName}
                    key={c._id}
                    className="bg-primary/70 text-secondary"
                  >
                    {c.CategoryName}
                  </option>
                ))}
              </select>
            </div>

            {/* phone */}
            <div className="form-control relative my-6 w-full">
              <input
                autoComplete="off"
                id="phone"
                name="phone"
                type="tel"
                className="peer placeholder-transparent h-10 w-full   bg-transparent text-secondary focus:outline-none focus:borer-rose-600 border-b-secondary/50 border-b-2"
                placeholder="phone"
                required
              />
              <label
                htmlFor="phone"
                className="absolute left-0 -top-3.5 text-gray-200 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-secondary peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-200 peer-focus:text-sm"
              >
                Phone
              </label>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* experience */}
            <div className="form-control relative my-6 w-full">
              <input
                autoComplete="off"
                id="experience"
                name="experience"
                type="number"
                className="peer placeholder-transparent h-10 w-full   bg-transparent text-secondary focus:outline-none focus:borer-rose-600 border-b-secondary/50 border-b-2"
                placeholder="experience"
                required
              />
              <label
                htmlFor="experience"
                className="absolute left-0 -top-3.5 text-gray-200 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-secondary peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-200 peer-focus:text-sm"
              >
                Experience
              </label>
            </div>
            {/* education */}
            <div className="form-control relative my-6 w-full">
              <input
                autoComplete="off"
                id="education"
                name="education"
                type="text"
                className="peer placeholder-transparent h-10 w-full   bg-transparent text-secondary focus:outline-none focus:borer-rose-600 border-b-secondary/50 border-b-2"
                placeholder="education"
                required
              />
              <label
                htmlFor="education"
                className="absolute left-0 -top-3.5 text-gray-200 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-secondary peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-200 peer-focus:text-sm"
              >
                Education
              </label>
            </div>
          </div>

          {/* address */}
          <div className="form-control relative my-6">
            <textarea
              autoComplete="off"
              id="address"
              name="address"
              type="text"
              className="peer placeholder-transparent h-10 w-full   bg-transparent text-secondary focus:outline-none focus:borer-rose-600 border-b-secondary/50 border-b-2"
              placeholder="address"
              required
            />
            <label
              htmlFor="address"
              className="absolute left-0 -top-3.5 text-gray-200 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-secondary peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-200 peer-focus:text-sm"
            >
              Address
            </label>
          </div>

          <button type="submit" className="SVButton-2 py-2 px-3 -mt-10 ">
            <span>Submit</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default BecomeInstructor;
