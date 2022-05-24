/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import UserContext from './UserContext'

function ViewProduct() {
  let navigate = useNavigate()
  let { id } = useParams()
  let viewContext = useContext(UserContext)
  let product = viewContext.product.filter((obj) => {
    return obj.id === id
  })

  console.log(product)
  return (
    <div>
      <div className="card shadow mb-4">
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-strepped table-hover"
              id="dataTable"
              width="100%"
              cellSpacing="0"
            >
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Owner Name</th>
                  <th>Email</th>
                  <th>Cat Name</th>
                  <th>Origin</th>
                  <th>Price</th>
                </tr>
              </thead>

              <tbody>
                {
                  <tr>
                    <td>{id}</td>
                    <td>{product[0].owner}</td>
                    <td>{product[0].email}</td>
                    <td>{product[0].name}</td>
                    <td>{product[0].origin}</td>
                    <td>${product[0].price}</td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div>
        <button
          className="btn btn-warning mt-2"
          onClick={() => {
            navigate(-1)
          }}
        >
          Go Back
        </button>
      </div>
    </div>
  )
}

export default ViewProduct
