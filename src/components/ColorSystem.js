import React from 'react'

function ColorSystem() {
  let colorData = [
    {
      color: 'bg-primary',
      name: 'Primary',
      code: '#4e73df',
    },
    {
      color: 'bg-success',
      name: 'Success',
      code: '#1cc88a',
    },
    {
      color: 'bg-info',
      name: 'Info',
      code: '#36b9cc',
    },
    {
      color: 'bg-warning',
      name: 'Warning',
      code: '#f6c23e',
    },
    {
      color: 'bg-danger',
      name: 'Danger',
      code: '#e74a3b',
    },
    {
      color: 'bg-secondary',
      name: 'Secondary',
      code: '#858796',
    },
    {
      color: 'bg-light',
      name: 'Light',
      code: '#f8f9fc',
      black: true,
    },
    {
      color: 'bg-dark',
      name: 'Dark',
      code: '#5a5c69',
    },
  ]
  return (
    <div className="row">
      {colorData.map(({ color, name, code, black }) => {
        return (
          <div className="col-lg-6 mb-4" key={name}>
            <div
              className={`card shadow ${
                black ? 'text-dark' : 'text-white'
              } ${color} `}
            >
              <div className="card-body">
                {name}
                <div
                  className={`${
                    black ? 'text-dark-50' : 'text-white-50'
                  } small`}
                >
                  {code}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ColorSystem
