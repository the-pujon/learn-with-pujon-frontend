import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import useApi from "../../Hooks/useApi";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import Empty from "../../assets/animations/empty.gif";

const ShowCategories = ({
  filteredCategories,
  setRefresh,
  categoryLoading,
}) => {
  const { del, loading } = useApi();

  const categoryDelete = (id) => {
    del(`categories/${id}`, "CategoryDelete").then(() => {
      setRefresh(true);
    });
  };

  const subcategoryDelete = (categoryId, subCategoryId) => {
    del(
      `categories/${categoryId}/subcategories/${subCategoryId}`,
      "SubcategoryDelete"
    ).then(() => {
      setRefresh(true);
    });
  };

  return (
    <div className="max-w-full h-full sm:h-[80vh] overflow-auto">
      {!categoryLoading && filteredCategories.length <= 0 ? (
        <div className=" flex w-full h-full sm:h-[80vh] justify-center items-center text-xl">
          <div>
            <img src={Empty} alt="empty" />
          </div>
        </div>
      ) : (
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
            {categoryLoading === "getCategories" && (
              <tr>
                <td>
                  <SkeletonTheme
                    baseColor="#ABB3BF"
                    highlightColor="#CED3DA"
                    height={50}
                  >
                    <Skeleton />
                  </SkeletonTheme>
                </td>
                <td>
                  <SkeletonTheme
                    baseColor="#ABB3BF"
                    highlightColor="#CED3DA"
                    height={50}
                  >
                    <Skeleton />
                  </SkeletonTheme>
                </td>
                <td>
                  <SkeletonTheme
                    baseColor="#ABB3BF"
                    highlightColor="#CED3DA"
                    height={50}
                  >
                    <Skeleton />
                  </SkeletonTheme>
                </td>
                <td>
                  <SkeletonTheme
                    baseColor="#ABB3BF"
                    highlightColor="#CED3DA"
                    height={50}
                  >
                    <Skeleton />
                  </SkeletonTheme>
                </td>
              </tr>
            )}
            {filteredCategories?.map((category) => (
              <tr key={category._id}>
                <td>{category.CategoryName}</td>
                <td> {category.CategorySlug}</td>
                <td>
                  <div className="dropdown dropdown-bottom dropdown-end ">
                    <div
                      tabIndex={0}
                      role="button"
                      className="badge-primary badge"
                    >
                      <span className="hidden sm:block">Show Subcategory</span>
                      <span className="sm:hidden"> Subcategory</span>
                    </div>
                    <div
                      tabIndex={0}
                      className="dropdown-content z-[1] card card-compact  max-h-[30vh] overflow-auto p-2 shadow bg-primary text-secondary"
                    >
                      <div className="card-body w-[10rem] md:w-[30rem]">
                        {category.subcategory.length === 0 ? (
                          <div className="w-32">No Subcategory yet</div>
                        ) : (
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
                                    <button
                                      className="disabled:text-gray-400 disabled:cursor-not-allowed"
                                      disabled={
                                        loading === "SubcategoryDelete"
                                          ? true
                                          : false
                                      }
                                      onClick={() =>
                                        subcategoryDelete(
                                          category._id,
                                          subcategory._id
                                        )
                                      }
                                    >
                                      <FaTrashAlt className="text-xl" />
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        )}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <button
                    className="disabled:text-gray-400 disabled:cursor-not-allowed"
                    disabled={loading === "CategoryDelete" ? true : false}
                    onClick={() => categoryDelete(category._id)}
                  >
                    <FaTrashAlt className="text-xl" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ShowCategories;
