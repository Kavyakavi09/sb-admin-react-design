import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className="p-5 m-5 text-center">
      <h2 className="text-primary">Page 404</h2>
      <p className="text-danger">Page Not Found</p>
      <Link to={'/'} className="btn btn-primary">
        Back to Dashboard
      </Link>
    </div>
  )
}

export default Error
