/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'

function Users() {
  const [user, setUser] = useState([])

  async function fetchData() {
    let user = await axios.get(
      'https://6251823cdfa31c1fbd6ee6d2.mockapi.io/users',
    )
    setUser(user.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  async function deleteData(id) {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this data!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        await axios.delete(
          `https://6251823cdfa31c1fbd6ee6d2.mockapi.io/users/${id}`,
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
        <h1 className="h3 mb-2 text-gray-800">User List</h1>
        <Link
          to={'/users-create'}
          className="d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-user fa-sm text-white-50"></i> Create User
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
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                  <th>View</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>S.No</th>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                  <th>View</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </tfoot>
              <tbody>
                {user.map(
                  ({ id, name, position, office, age, startDate, salary }) => {
                    return (
                      <tr key={id}>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{position}</td>
                        <td>{office}</td>
                        <td>{age}</td>
                        <td>{startDate}</td>
                        <td>${salary}</td>
                        <td>
                          <Link
                            to={`/users-view${id}`}
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

export default Users
