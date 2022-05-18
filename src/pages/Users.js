/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from './UserContext'

function Users() {
  const userContext = useContext(UserContext)
  let userData = [
    {
      id: 1,
      name: 'Tiger Nixon',
      position: 'System Architect',
      office: 'Edinburgh',
      age: 61,
      date: '2011/04/25',
      salary: '$320,800',
    },
    {
      id: 2,
      name: 'Garrett Winters',
      position: 'Accountant',
      office: 'Tokyo',
      age: 63,
      date: '2011/07/25',
      salary: '$170,750',
    },
    {
      id: 3,
      name: 'Ashton Cox',
      position: 'Junior Technical Author',
      office: 'San Francisco',
      age: 66,
      date: '2009/01/12',
      salary: '$86,000',
    },
    {
      id: 4,
      name: 'Cedric Kelly',
      position: 'Senior Javascript Developer',
      office: 'Edinburgh',
      age: 22,
      date: '2012/03/29',
      salary: '$433,060',
    },
    {
      id: 5,
      name: 'Airi Satou',
      position: 'Accountant',
      office: 'Tokyo',
      age: 33,
      date: '2008/11/28',
      salary: '$162,700',
    },
    {
      id: 6,
      name: 'Brielle Williamson',
      position: 'Integration Specialist',
      office: 'New York',
      age: 61,
      date: '2012/12/02',
      salary: '$372,000',
    },
    {
      id: 7,
      name: 'Tiger Nixon',
      position: 'System Architect',
      office: 'Edinburgh',
      age: 61,
      date: '2011/04/25',
      salary: '$320,800',
    },
    {
      id: 8,
      name: 'Herrod Chandler',
      position: 'Sales Assistant',
      office: 'San Francisco',
      age: 59,
      date: '2012/08/06',
      salary: '$137,500',
    },
    {
      id: 9,
      name: 'Rhona Davidson',
      position: 'Integration Specialist',
      office: 'Tokyo',
      age: 55,
      date: '2010/10/14',
      salary: '$327,900',
    },
    {
      id: 10,
      name: 'Colleen Hurst',
      position: 'Javascript Developer',
      office: 'San Francisco',
      age: 39,
      date: '2009/09/15',
      salary: '$205,500',
    },
  ]

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
              className="table table-bordered"
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
                </tr>
              </tfoot>
              <tbody>
                {userData.map(
                  ({ name, position, office, age, date, salary, id }) => {
                    return (
                      <tr key={id}>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{position}</td>
                        <td>{office}</td>
                        <td>{age}</td>
                        <td>{date}</td>
                        <td>{salary}</td>
                      </tr>
                    )
                  },
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            User Create Table
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
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                </tr>
              </thead>
              <tbody>
                {userContext.users.map(
                  (
                    { name, position, office, age, startDate, salary },
                    index,
                  ) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{name}</td>
                        <td>{position}</td>
                        <td>{office}</td>
                        <td>{age}</td>
                        <td>{startDate}</td>
                        <td>{salary}</td>
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
