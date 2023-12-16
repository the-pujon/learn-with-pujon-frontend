import React from 'react'

const ShowCategories = ({filteredCategories}) => {
  return (
    <table className="table">
    {/* head */}
    <thead>
        <tr>
            <th>Category Name</th>
            <th>Category Slug</th>
            <th>Subcategory</th>
            {/*<th>Experience</th>
<th>Education</th>
<th>About</th>
<th>Action</th>*/}
        </tr>
    </thead>
    <tbody>
        {filteredCategories?.map((category) => (
            <tr key={category._id}>
                {/*<td>
<div className="flex items-center space-x-3">
  <div className="avatar">
    <div className="mask mask-squircle w-12 h-12">
      <img
        src={instructor?.instructorImage}
        alt="Avatar Tailwind CSS Component"
      />
    </div>
  </div>

  <div className="font-bold">{instructor.name}</div>
</div>
</td>*/}
                {/*<td>
<div className="flex items-center space-x-3">
  <div>
    <div className="font-bold">{instructor.email}</div>
  </div>
</div>
</td>*/}
                <td>{category.CategoryName}</td>
                <td> {category.CategorySlug}</td>
                {/*<td> {instructor.education}</td>
<td> {instructor.about}</td>*/}
                {/*<th>
<button
  disabled={instructor.approved}
  onClick={() => {
    handleApproved(instructor.email);
  }}
  className={
    instructor.approved
      ? "border-green-600 border py-1 px-2 rounded-full text-green-600 font-normal"
      : "border-red-600 border py-1 px-2 rounded-full text-red-600 font-normal"
  }
>
  {instructor.approved ? "Approved" : "Not approved yet"}
</button>
</th>*/}
            </tr>
        ))}
    </tbody>
</table>
  )
}

export default ShowCategories