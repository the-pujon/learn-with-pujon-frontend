import React from "react";

const CategoryDropdown = ({ buttonName, categoryList }) => {
  return (
    <div className="dropdown">
      <label tabIndex={0} className="btn m-1">
        {buttonName}
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content z-40 bg-primary text-secondary menu   shadow  rounded-box w-52"
      >
        {categoryList.map((category) => (
          <li className="cursor-pointer hover:bg-secondary "  >{category}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryDropdown;
