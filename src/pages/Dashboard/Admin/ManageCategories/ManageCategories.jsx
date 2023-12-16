import React,{useEffect,useState} from "react";
import Select from 'react-select';
import ShowCategories from "../../../../Components/ShowCategories/ShowCategories";
import useApi from "../../../../Hooks/useApi";

const ManageCategories=() => {
    const [refresh,setRefresh]=useState(null);
    const [categories,setAllCategories]=useState([]);
    const [filteredCategories,setFilteredCategories]=useState([]);
    const [search,setSearch]=useState("");
    const [category,setCategory]=useState([]);
    const [subcategory,setSubcategory]=useState([])
    const [inputValue,setInputValue]=useState('');
    const [showDropdown,setShowDropdown]=useState('');

    const {get,post} = useApi()

    const [categoryData,setCategoryData]=useState({
        CategoryName: '',
        CategorySlug: ''
    });

    const [subCategoryData,setSubCategoryData]=useState({
        SubCategoryName: '',
        SubCategorySlug: ''
    });

    useEffect(() => {
        fetch("http://localhost:5000/api/categories")
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setAllCategories(data);
                setFilteredCategories(data);
                setRefresh(null)
            });
    },[refresh]);

    const handleChange=(e) => {
        const {name,value}=e.target;
        setCategoryData({
            ...categoryData,
            [name]: value,
        });
    };

    const handleSubCategoryChange=(e) => {
        const {name,value}=e.target;
        setSubCategoryData({
            ...subCategoryData,
            [name]: value,
        });
    };


    const handleCategory=(e) => {
        const {name,value}=e.target;
        const sub=filteredCategories.find((c) => {
            return c.CategorySlug===value;
        });

        console.log(sub)

        const sc=sub.subcategory;

        setSubcategory(sc);
    };

    const handleInputChange=(e) => {
        console.log(e.target.value)
        setInputValue(e.target.value);
    };


    const handleOptionSelect=(option) => {
        console.log(option)
        setInputValue(option);
        //setTimeout(() => setShowDropdown(false), 1000); // Delay closing the dropdown
    };



    const handleCategorySubmit = (e) =>{
        e.preventDefault();
        const categoryName = e.target.CategoryName.value
        const categorySlug = e.target.CategorySlug.value
        console.log(categoryName, categorySlug)



        post('categories', { CategoryName: categoryName, CategorySlug: categorySlug });
        setRefresh(true)

    }


    return (
        <div className="wrapper min-h-screen  text-primary backdrop-blur-md">
            <div className="flex divide-x gap-4 min-h-screen  overflow-x-auto pt-[8rem]">
                <div className="flex-1 " >
                    {/* for add category */}
                    <div className="pb-10">
                        <p>Add Category</p>
                        <form action="" onSubmit={handleCategorySubmit} >
                            {/* category name */}
                            <div className="form-control relative my-6">
                                <input
                                    autoComplete="off"
                                    id="CategoryName"
                                    name="CategoryName"
                                    type="name"
                                    className="peer placeholder-transparent h-10 w-full   bg-transparent text-primary focus:outline-none focus:borer-rose-600 border-b-primary border-b"
                                    placeholder="CategoryName"
                                    required
                                    onChange={handleChange}
                                />
                                <label
                                    htmlFor="CategoryName"
                                    className="absolute left-0 -top-3.5 text-primary text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-primary peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-sm"
                                >
                                    Category Name
                                </label>
                            </div>

                            {/* category slug */}
                            <div className="form-control relative my-6">
                                <input
                                    autoComplete="off"
                                    id="CategorySlug"
                                    name="CategorySlug"
                                    type="name"
                                    className="peer placeholder-transparent h-10 w-full   bg-transparent text-primary focus:outline-none focus:borer-rose-600 border-b-primary border-b"
                                    placeholder="CategorySlug"
                                    required
                                    onChange={handleChange}
                                />
                                <label
                                    htmlFor="CategorySlug"
                                    className="absolute left-0 -top-3.5 text-primary text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-primary peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-sm"
                                >
                                    Category Slug
                                </label>
                            </div>
                            <button type="submit" className="SVButton-2 py-1 px-2">Save</button>
                        </form>
                    </div>

                    {/* for add subcategory */}

                    <div >
                        <p>Add Subcategory</p>
                        <form action="" onSubmit={(e) => {
                            e.preventDefault()

                        }}
                        >

                            {/* Category Name */}
                            <div className="form-control relative my-6 w-full">
                                <select
                                    onChange={handleCategory}
                                    id="CategoryName"
                                    name="CategoryName"
                                    className="select select-ghost w-full  border-t-0 border-l-0 border-r-0 rounded-none border-b text-primary text-sm border-b-primary outline-none  focus:text-primary focus:outline-none"
                                >
                                    <option disabled selected>
                                        Category
                                    </option>
                                    {filteredCategories.map((c) => (
                                        <option
                                            value={c.CategorySlug}
                                            key={c._id}
                                            className="bg-primary text-secondary"
                                        >
                                            {c.CategoryName}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* subcategory name */}
                            <div className="form-control relative my-6 w-full">
                                <input
                                    autoComplete="off"
                                    id="SubCategoryName"
                                    name="SubCategoryName"
                                    type="name"
                                    className="peer placeholder-transparent h-10 w-full   bg-transparent text-primary focus:outline-none focus:borer-rose-600 border-b-primary border-b"
                                    placeholder="name"
                                    required
                                    value={inputValue}
                                    onChange={handleInputChange}
                                    onFocus={() => setShowDropdown('SubCategoryName')}
                                    onBlur={() => {
                                        setTimeout(() => setShowDropdown(''),200)
                                    }}
                                />
                                <label
                                    htmlFor="name"
                                    className="absolute left-0 -top-3.5 text-primary text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-primary/50 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-sm"
                                >
                                    Subcategory Name
                                </label>

                                {showDropdown==='SubCategoryName'&&(
                                    <div className="py-1 z-10 mt-1 w-full bg-primary text-secondary text-sm border border-gray-300 rounded-md shadow-lg">
                                        {subcategory.length!==0? subcategory.map((option) => (
                                            <div
                                                key={option}
                                                onClick={() => {
                                                    console.log('here')
                                                    handleOptionSelect(option)
                                                }}
                                                className="cursor-pointer px-4 hover:bg-gray-500"
                                            >
                                                {option.SubCategoryName}
                                            </div>
                                        )):<div className="px-2">Please Select Category first</div>}
                                    </div>
                                )}
                            </div>

                            {/* subcategory slug */}
                            <div className="form-control relative my-6 w-full">
                                <input
                                    autoComplete="off"
                                    id="SubCategorySlug"
                                    name="SubCategorySlug"
                                    type="name"
                                    className="peer placeholder-transparent h-10 w-full   bg-transparent text-primary focus:outline-none focus:borer-rose-600 border-b-primary border-b"
                                    placeholder="name"
                                    required
                                    //onChange={handleChange}
                                    value={inputValue}
                                    onChange={handleInputChange}
                                    //placeholder="Subcategory Name"
                                    onFocus={() => setShowDropdown('SubCategorySlug')}
                                    onBlur={() => {
                                        setTimeout(() => setShowDropdown(''),200)
                                    }}
                                />
                                <label
                                    htmlFor="name"
                                    className="absolute left-0 -top-3.5 text-primary text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-primary/50 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-sm"
                                >
                                    Subcategory Slug (Please add subcategory slug without any space)
                                </label>

                                {showDropdown==='SubCategorySlug'&&(
                                    <div className="py-1 z-10 mt-1 w-full bg-primary text-secondary text-sm border border-gray-300 rounded-md shadow-lg">
                                        {subcategory.length!==0? subcategory.map((option) => (
                                            <div
                                                key={option}
                                                onClick={() => {
                                                    handleOptionSelect(option)
                                                }}
                                                className="cursor-pointer px-4 hover:bg-gray-500"
                                            >
                                                {option.SubCategorySlug}
                                            </div>
                                        )):<div className="px-2">Please Select Category first</div>}
                                    </div>
                                )}
                            </div>
                            <button type="submit" className="SVButton-2 py-1 px-2">Save</button>
                        </form>



                    </div>

                </div>
                <div className="flex-1">
                    <ShowCategories filteredCategories={filteredCategories} />
                </div>
            </div>
        </div>
    );
};

export default ManageCategories;



// DropdownInput.js

//import React, { useState } from 'react';


//const ManageCategories = () => {
//  const [inputValue, setInputValue] = useState('');
//  const [showDropdown, setShowDropdown] = useState(false);
//  const options = ['Option 1', 'Option 2', 'Option 3'];

//  const handleInputChange = (e) => {
//    console.log(e.target.value)
//    setInputValue(e.target.value);
//  };


//  const handleOptionSelect = (option) => {
//    console.log(option)
//    setInputValue(option);
//    //setTimeout(() => setShowDropdown(false), 1000); // Delay closing the dropdown
//  };


//  const handleFormSubmit = (e) => {
//    e.preventDefault();
//    console.log('Submitted value:', inputValue);
//    // Add your form submission logic here
//  };

//  return (
//    <div className="wrapper mt-4 wrapper   text-primary backdrop-blur-md pt-12">
//      <form onSubmit={handleFormSubmit}>
//    <div className="relative">
//      <input
//        type="text"
//        value={inputValue}
//        onChange={handleInputChange}
//        onFocus={() => setShowDropdown(true)}
//        onBlur={() => {
//            setTimeout(() => setShowDropdown(false), 200)
//        }}
//        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//      />
//      {showDropdown && (
//        <div className=" z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
//          {options.map((option) => (
//            <div
//              key={option}
//              onClick={() => {
//                console.log('here')
//                handleOptionSelect(option)
//              }}
//              className="cursor-pointer px-4 py-2 hover:bg-gray-500"
//            >
//              {option}
//            </div>
//          ))}
//        </div>
//      )}
//    </div>
//    <button
//      type="submit"
//      className="mt-2 px-4 py-2 cursor-pointer bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
//    >
//      Submit
//    </button>
//  </form>
//    </div>
//  );
//};

//export default ManageCategories;
