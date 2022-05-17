/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import UserData from './ChartDatas'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
)

function LineChart() {
  const chartData = {
    labels: UserData.map((data) => data.month),
    datasets: [
      {
        label: `Earnings`,
        data: UserData.map((data) => data.earnings),
        backgroundColor: ['#4E73DF'],
        borderColor: '#4E73DF',
        borderWidth: 2,
      },
    ],
  }

  return (
    <div className="col-xl-7 col-lg-7">
      <div className="card shadow mb-4">
        {/* <!-- Card Header - Dropdown --> */}
        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
          <h6 className="m-0 font-weight-bold text-primary">
            Earnings Overview
          </h6>
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
        <div className="card-body">
          <div className="chart-area">
            <Line data={chartData} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LineChart
