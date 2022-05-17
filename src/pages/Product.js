/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
// import { Link } from "react-router-dom";
import productItems from '../components/ProductsItem'

const Product = () => {
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-2 text-gray-800">Products List</h1>
        {/* <Link
          to={'/users-create'}
          className="d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-fw fa-table"></i> Create Product
        </Link> */}
      </div>
      <p className="mb-4">
        DataTables is a third party plugin that is used to generate the demo
        table below. For more information about DataTables, please visit the{' '}
        <a target="_blank" href="https://datatables.net">
          official DataTables documentation
        </a>
        .
      </p>

      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            DataTables Example
          </h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellSpacing="0"
            >
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>TITLE</th>
                  <th>CATEGORY</th>
                  <th>DESCRIPTION</th>
                  <th>PRICE</th>
                  <th>RATING</th>
                  <th>IMAGE</th>
                  {/* <th>View</th>
                  <th>Edit</th>
                  <th>Delete</th> */}
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>S.No</th>
                  <th>TITLE</th>
                  <th>CATEGORY</th>
                  <th>DESCRIPTION</th>
                  <th>PRICE</th>
                  <th>RATING</th>
                  <th>IMAGE</th>
                  {/* <th>View</th>
                  <th>Edit</th>
                  <th>Delete</th> */}
                </tr>
              </tfoot>
              <tbody>
                {productItems.map(
                  ({
                    id,
                    title,
                    price,
                    description,
                    category,
                    rating: { rate },
                    image,
                  }) => {
                    return (
                      <tr key={id}>
                        <td>{id}</td>
                        <td>{title}</td>
                        <td>{category}</td>
                        <td>{description}</td>
                        <td>${price}</td>
                        <td>{rate}</td>
                        <td>
                          <img
                            src={image}
                            alt="ProductImage"
                            className="product-image"
                          />
                        </td>
                        {/* <td>
                          <Link to={`/users-view${id}`}
                            className="btn btn-sm btn-primary"
                          >
                            View
                          </Link>
                        </td>
                        <td>
                          <Link
                            to={`/users-edit${id}`}
                            className="btn btn-sm btn-warning"
                          >
                            Edit
                          </Link>
                        </td>
                        <td>
                          <button className="btn btn-sm btn-danger">Delete</button>
                        </td> */}
                      </tr>
                    )
                  },
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product
