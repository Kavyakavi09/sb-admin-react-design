import React from 'react'
import { useParams } from 'react-router-dom'

function UserView() {
  let params = useParams()
  console.log(params)
  return <div>UserView {params.id}</div>
}

export default UserView
