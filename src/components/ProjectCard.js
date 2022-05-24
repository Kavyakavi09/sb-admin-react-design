import React from 'react'

function ProjectCard() {
  let projectData = [
    {
      name: 'Server Migration',
      percentage: '20%',
      width20: true,
    },
    {
      name: 'Sales Tracking ',
      percentage: '40%',
      width40: true,
    },
    {
      name: 'Customer Database',
      percentage: '60%',
      width60: true,
    },
    {
      name: 'Payout Details',
      percentage: '80%',
      width80: true,
    },
    {
      name: 'Account Setup',
      percentage: 'complete!',
      width100: true,
    },
  ]
  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
      </div>
      <div className="card-body">
        {projectData.map(
          ({
            name,
            percentage,
            width20,
            width40,
            width60,
            width80,
            width100,
          }) => {
            return (
              <>
                <h4 className="small font-weight-bold">
                  {name}
                  <span className="float-right">{percentage}</span>
                </h4>
                <div className="progress mb-4" key={name}>
                  {width20 && (
                    <div
                      className="progress-bar bg-danger"
                      role="progressbar"
                      style={{ width: '20%' }}
                    ></div>
                  )}
                  {width40 && (
                    <div
                      className="progress-bar bg-warning"
                      role="progressbar"
                      style={{ width: '40%' }}
                    ></div>
                  )}
                  {width60 && (
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{ width: '60%' }}
                    ></div>
                  )}
                  {width80 && (
                    <div
                      className="progress-bar bg-info"
                      role="progressbar"
                      style={{ width: '80%' }}
                    ></div>
                  )}
                  {width100 && (
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: '100%' }}
                    ></div>
                  )}
                </div>
              </>
            )
          },
        )}
      </div>
    </div>
  )
}

export default ProjectCard
