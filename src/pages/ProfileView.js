/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function ProfileView() {
  const [user, setUser] = useState([])
  const { id } = useParams()
  useEffect(() => {
    async function fetchData() {
      let user = await axios.get(
        `https://6251823cdfa31c1fbd6ee6d2.mockapi.io/users/${id}`,
      )
      setUser(user.data)
    }
    fetchData()
  }, [])
  return (
    <div>
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
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.position}</td>
              <td>{user.office}</td>
              <td>{user.age}</td>
              <td>{user.startDate}</td>
              <td>${user.salary}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="text-center m-5">
        <Link to="/profile" className="btn btn-primary">
          Back to Users
        </Link>
      </div>
    </div>
  )
}

export default ProfileView
