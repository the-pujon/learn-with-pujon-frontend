import React,{useEffect,useState} from "react";
import ShowCategories from "../../../../Components/ShowCategories/ShowCategories";
import useApi from "../../../../Hooks/useApi";

const ManageCategories=() => {
    const [refresh,setRefresh]=useState(null);
    const [filteredCategories,setFilteredCategories]=useState([]);
    const [subcategory,setSubcategory]=useState(null)
    const [showDropdown,setShowDropdown]=useState('');

    const {get,post,loading}=useApi()

    useEffect(() => {
        get("categories", 'CategoryRead')
            .then((data) => {
                setFilteredCategories(data);
                setRefresh(null)
            });
    },[refresh]);

    const handleCategory=(e) => {
        const {name,value}=e.target;
        get(`categories/${value}`).then(res => setSubcategory(res.subcategory))
    };

    const handleCategorySubmit=(e) => {
        e.preventDefault();
        const categoryName=e.target.CategoryName.value
        const categorySlug=e.target.CategorySlug.value
        post('categories',{CategoryName: categoryName,CategorySlug: categorySlug},'CategorySubmit').then(() => {
            e.target.reset()
            setRefresh(true)
        })
    }

    const handleSubcategorySubmit=(e) => {
        e.preventDefault()
        const form=e.target

        const categoryId=form.CategoryName.value
        const SubCategoryName=form.SubCategoryName.value
        const SubCategorySlug=form.SubCategorySlug.value

        post(`categories/${categoryId}/subcategories`,{SubCategoryName: SubCategoryName,SubCategorySlug: SubCategorySlug},'SubcategorySubmit').then(() => {
            form.reset()
            setRefresh(true)
        })

    }


    return (
        <div className="wrapper min-h-screen  text-primary backdrop-blur-md">
            <div className="flex divide-x gap-4 min-h-screen  overflow-x-auto pt-[8rem]">
                <div className="basis-[35rem]" >
                    {/* for add category */}
                    <div className="pb-10">
                        <p className="text-2xl font-semibold">Add Category</p>
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
                                //onChange={handleChange}
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
                                //onChange={handleChange}
                                />
                                <label
                                    htmlFor="CategorySlug"
                                    className="absolute left-0 -top-3.5 text-primary text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-primary peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-sm"
                                >
                                    Category Slug
                                </label>
                            </div>
                            <button disabled={loading==='CategorySubmit'? true:false} type="submit" className="SVButton-2 py-1 px-2 disabled:cursor-not-allowed">{loading==='CategorySubmit'? 'Loading':'Save'}</button>
                        </form>
                    </div>

                    {/* for add subcategory */}
                    <>
                        <p className="text-2xl font-semibold">Add Subcategory</p>
                        <form action="" onSubmit={handleSubcategorySubmit}
                        >
                            {/* Category Name */}
                            <div className="form-control relative my-6 w-full">
                                <select
                                defaultValue='Category'
                                    onChange={handleCategory}
                                    id="CategoryName"
                                    name="CategoryName"
                                    className="select select-ghost w-full  border-t-0 border-l-0 border-r-0 rounded-none border-b text-primary text-sm border-b-primary outline-none  focus:text-primary focus:outline-none"
                                >
                                    <option disabled >
                                        Category
                                    </option>
                                    {filteredCategories.map((c) => (
                                        <option
                                            value={c._id}
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
                                    onFocus={() => setShowDropdown('SubCategoryName')}
                                    onBlur={() => {
                                        setTimeout(() => setShowDropdown(''),200)
                                    }}
                                />
                                <label
                                    htmlFor="name"
                                    className="absolute left-0 -top-3.5 text-primary text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-primary peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-sm"
                                >
                                    Subcategory Name
                                </label>

                                {showDropdown==='SubCategoryName'&&(
                                    <div className="py-1 z-10 mt-1 w-full bg-primary text-secondary text-sm border border-gray-300 rounded-md shadow-lg">
                                        {!subcategory? <div className="px-2">Please Select Category first</div>:subcategory.length!==0? subcategory.map((option) => (
                                            <div
                                                key={option._id}
                                                className="cursor-pointer px-4 hover:bg-gray-500"
                                            >
                                                {option.SubCategoryName}
                                            </div>
                                        )):<div className="px-2">No Subcategory here</div>}
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
                                    required
                                    placeholder="Subcategory Name"
                                    onFocus={() => setShowDropdown('SubCategorySlug')}
                                    onBlur={() => {
                                        setTimeout(() => setShowDropdown(''),200)
                                    }}
                                />
                                <label
                                    htmlFor="name"
                                    className="absolute left-0 -top-3.5 text-primary text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-primary peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-sm"
                                >
                                    Subcategory Slug
                                </label>

                                {showDropdown==='SubCategorySlug'&&(
                                    <div className="py-1 z-10 mt-1 w-full bg-primary text-secondary text-sm border border-gray-300 rounded-md shadow-lg">
                                        {!subcategory? <div className="px-2">Please Select Category first</div>:subcategory.length!==0? subcategory.map((option) => (
                                            <div
                                                key={option._id}
                                                className="cursor-pointer px-4 hover:bg-gray-500"
                                            >
                                                {option.SubCategorySlug}
                                            </div>
                                        )):<div className="px-2">No Subcategory slug here</div>}
                                    </div>
                                )}
                            </div>
                            <button disabled={loading==='SubcategorySubmit'? true:false} type="submit" className="SVButton-2 py-1 px-2 disabled:cursor-not-allowed">{loading==='SubcategorySubmit'? 'Loading':'Save'}</button>
                        </form>
                    </>
                </div>
                <div className="flex-1 max-h-[80vh] overflow-auto">
                    <ShowCategories loading={loading} filteredCategories={filteredCategories} setRefresh={setRefresh} />
                </div>
            </div>
        </div>
    );
};

export default ManageCategories;
