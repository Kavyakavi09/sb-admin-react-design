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
        `https://6251823cdfa31c1fbd6ee6d2.mockapi.io/Products/${id}`,
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
              <th>Owner</th>
              <th>Email</th>
              <th>Cat Name</th>
              <th>Origin</th>
              <th>Price</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{id}</td>
              <td>{user.owner}</td>
              <td>{user.email}</td>
              <td>{user.name}</td>
              <td>{user.origin}</td>
              <td>${user.price}</td>
              <td>{user.rating}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="text-center m-5">
        <Link to="/profile" className="btn btn-warning">
          Go back
        </Link>
      </div>
    </div>
  )
}

export default ProfileView
