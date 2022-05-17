/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)
const PieChart = () => {
  const data = {
    labels: ['Direct', 'Social', 'Referral'],
    datasets: [
      {
        label: 'Revenue Sources',
        data: [55, 30, 15],
        backgroundColor: ['#4E73DF', '#1CC88A', '#36B9CC'],
        borderColor: ['#FFFFFF', '#FFFFFF', '#FFFFFF'],
        borderWidth: 2,
        cutout: '80%',
      },
    ],
  }

  return (
    <div className="col-xl-5 col-lg-5">
      <div className="card shadow mb-4">
        {/* <!-- Card Header - Dropdown --> */}
        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
          <h6 className="m-0 font-weight-bold text-primary">Revenue Sources</h6>
          <div className="dropdown no-arrow">
            <a
              className="dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
            </a>
            <div
              className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
              aria-labelledby="dropdownMenuLink"
            >
              <div className="dropdown-header">Dropdown Header:</div>
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </div>
        </div>
        {/* <!-- Card Body --> */}
        <div className="card-body d-flex flex-row align-items-center justify-content-center">
          <div className=" pt-4 pb-2" style={{ width: 290 }}>
            <Doughnut data={data} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PieChart
