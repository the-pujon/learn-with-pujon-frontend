import React from 'react'
import {FaTrashAlt} from 'react-icons/fa'
import useApi from '../../Hooks/useApi'

const ShowCategories=({filteredCategories,setRefresh}) => {
  const {del,loading}=useApi()

  const categoryDelete=(id) => {
    del(`categories/${id}`, 'CategoryDelete').then(()=>{
      setRefresh(true)
    })
  }

  const subcategoryDelete=(categoryId,subCategoryId) => {
    del(`categories/${categoryId}/subcategories/${subCategoryId}`, 'SubcategoryDelete').then(() => {
      setRefresh(true)
    });
  }

  return (
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th>Category Name</th>
          <th>Category Slug</th>
          <th>Subcategory</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {filteredCategories?.map((category) => (
          <tr key={category._id}>
            <td>{category.CategoryName}</td>
            <td> {category.CategorySlug}</td>
            <td>
              <div className="dropdown dropdown-bottom dropdown-end ">
                <div tabIndex={0} role="button" className="badge-primary badge">Show Subcategory</div>
                <div tabIndex={0} className="dropdown-content z-[1] card card-compact  max-h-[30vh] overflow-auto p-2 shadow bg-primary text-secondary">
                  <div className="card-body w-[30rem]">
                    {
                      category.subcategory.length===0? <div className='w-32'>No Subcategory yet</div>:
                        <table className="table">
                          {/* head */}
                          <thead>
                            <tr>
                              <th>Category Name</th>
                              <th>Category Slug</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {category?.subcategory?.map((subcategory) => (
                              <tr key={subcategory._id}>
                                <td>{subcategory.SubCategoryName}</td>
                                <td> {subcategory.SubCategorySlug}</td>
                                <td>
                                  <button className='disabled:text-gray-400 disabled:cursor-not-allowed' disabled={loading==='SubcategoryDelete'? true:false} onClick={() => subcategoryDelete(category._id,subcategory._id)} >
                                    <FaTrashAlt className='text-xl' />
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                    }
                  </div>
                </div>
              </div>
            </td>
            <td>
              <button className='disabled:text-gray-400 disabled:cursor-not-allowed' disabled={loading==='CategoryDelete'? true:false} onClick={() => categoryDelete(category._id)} >
                <FaTrashAlt className='text-xl' />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ShowCategories