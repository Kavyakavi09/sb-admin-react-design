import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const DashboardReport = () => {
  const [report, setReport] = useState(false)

  let reortGenerate = () => {
    setReport(!report)
  }

  return (
    <div className="text-center p-5 text-primary">
      {report ? (
        <h3>
          Your Reports has been generated successfully.
          <p className="m-5">Have a nice day😊</p>
        </h3>
      ) : (
        <h4 className="">
          Please click the below menu to generate your report !
        </h4>
      )}
      {report ? (
        <button onClick={reortGenerate} className="btn btn-primary m-5 d-none">
          Click to Generate report
        </button>
      ) : (
        <button onClick={reortGenerate} className="btn btn-primary m-5">
          Click to Generate report
        </button>
      )}
      {report ? (
        <Link to={'/'} className="btn btn-primary">
          Back to Dashboard
        </Link>
      ) : (
        <Link to={'/'} className="d-none">
          Back to Dashboard
        </Link>
      )}
    </div>
  )
}

export default DashboardReport
