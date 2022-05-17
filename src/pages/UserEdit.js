import React from 'react'

function UserEdit() {
  return (
    <div className="container py-3">
      <div className="card shadow">
        <div className="card-header py-3">
          <h3 className="m-0 font-weight-bold text-primary">User Edit Form</h3>
        </div>
        <div className="card-body">
          <form>
            <div className="row">
              <div className="col-lg-6">
                <label>Name</label>
                <input type={'text'} className="form-control" />
              </div>
              <div className="col-lg-6">
                <label>Position</label>
                <input type={'text'} className="form-control" />
              </div>
              <div className="col-lg-6">
                <label>Office</label>
                <input type={'text'} className="form-control" />
              </div>
              <div className="col-lg-6">
                <label>Age</label>
                <input type={'number'} className="form-control" />
              </div>
              <div className="col-lg-6">
                <label>Start Date</label>
                <input type={'date'} className="form-control" />
              </div>
              <div className="col-lg-6">
                <label>Salary</label>
                <input type={'number'} className="form-control" />
              </div>
              <div className="col-lg-6 mt-3">
                <input type={'submit'} className="btn btn-primary" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UserEdit
