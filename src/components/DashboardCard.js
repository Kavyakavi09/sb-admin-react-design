import React from 'react'

function DashboardCard({ title, price, icon, progress, borderLeft, color }) {
  return (
    <div className="col-xl-3 col-md-6 mb-4">
      <div className={`card ${borderLeft} shadow h-100 py-2`}>
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div
                className={`text-xs font-weight-bold ${color} text-uppercase mb-1`}
              >
                {title}
              </div>
              <div className="row no-gutters align-items-center">
                <div className="col-auto">
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    {price}
                  </div>
                </div>

                {progress ? (
                  <div className="col">
                    <div className="progress progress-sm ml-3 mr-2">
                      <div
                        className="progress-bar bg-info"
                        role="progressbar"
                        style={{ width: '50%' }}
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                ) : (
                  ''
                )}
              </div>
            </div>
            <div className="col-auto">
              <i className={`fas ${icon} fa-2x text-gray-300`}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardCard
