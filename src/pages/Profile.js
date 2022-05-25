/* eslint-disable react/jsx-no-target-blank */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'

const Profile = () => {
  const [user, setUser] = useState([])

  async function fetchData() {
    try {
      let user = await axios.get(
        'https://6251823cdfa31c1fbd6ee6d2.mockapi.io/Products',
      )
      setUser(user.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  function deleteData(id) {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this data!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        await axios.delete(
          `https://6251823cdfa31c1fbd6ee6d2.mockapi.io/Products/${id}`,
        )

        fetchData()
        swal('Poof! Your data has been deleted!', {
          icon: 'success',
        })
      } else {
        swal('Your data is safe!')
      }
    })
  }
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-2 text-gray-800">Cats List</h1>
        <Link
          to={'/profile-create'}
          className="d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-fw fa-cat"></i> Create Cat
        </Link>
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
              className="table table-bordered table-hover"
              id="dataTable"
              width="100%"
              cellSpacing="0"
            >
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Owner</th>
                  <th>Email</th>
                  <th>Cat Name</th>
                  <th>Origin</th>
                  <th>Price</th>
                  <th>Rating</th>
                  <th>View</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>S.No</th>
                  <th>Owner</th>
                  <th>Email</th>
                  <th>Cat Name</th>
                  <th>Origin</th>
                  <th>Price</th>
                  <th>Rating</th>
                  <th>View</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </tfoot>
              <tbody>
                {user.map(
                  ({
                    id,
                    name,
                    origin,
                    owner,
                    price,
                    email,
                    image,
                    rating,
                  }) => {
                    return (
                      <tr key={id}>
                        <td>{id}</td>
                        <td>{owner}</td>
                        <td>{email}</td>
                        <td>{name}</td>
                        <td>{origin}</td>
                        <td>${price}</td>
                        <td>{rating}</td>
                        <td>
                          <Link
                            to={`/profile-view${id}`}
                            className="btn btn-sm btn-primary"
                          >
                            View
                          </Link>
                        </td>
                        <td>
                          <Link
                            to={`/profile-edit${id}`}
                            className="btn btn-sm btn-warning"
                          >
                            Edit
                          </Link>
                        </td>
                        <td>
                          <button
                            className="btn btn-sm btn-danger"
                            onClick={() => {
                              deleteData(id)
                            }}
                          >
                            Delete
                          </button>
                        </td>
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

export default Profile
