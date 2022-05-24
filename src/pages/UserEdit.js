/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

function UserEdit() {
  let { id } = useParams()
  let navigate = useNavigate()
  let formik = useFormik({
    initialValues: {
      name: '',
      position: '',
      office: '',
      age: 0,
      startDate: '',
      salary: 0,
    },
    validate: (values) => {
      const errors = {}
      if (!values.name) {
        errors.name = 'Please Enter your Name'
      }

      if (!values.position) {
        errors.position = 'Please Enter your position'
      }

      if (!values.office) {
        errors.office = 'Please Enter the name of your office'
      }

      if (!values.age || values.age < 18) {
        errors.age = 'Age is required and should be greater than 18'
      }

      if (!values.startDate) {
        errors.startDate = 'Please Enter valid date'
      }
      if (!values.salary || values.salary < 10000) {
        errors.salary = 'Salary should be greater than 10,000'
      }
      return errors
    },
    onSubmit: async (values) => {
      await axios.put(
        `https://6251823cdfa31c1fbd6ee6d2.mockapi.io/users/${id}`,
        values,
      )
      navigate('/users', { replace: true })
    },
  })
  useEffect(() => {
    async function fetchData() {
      try {
        let user = await axios.get(
          `https://6251823cdfa31c1fbd6ee6d2.mockapi.io/users/${id}`,
        )
        formik.setValues(user.data)
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchData()
  }, [])
  return (
    <div className="container py-3">
      <div className="card shadow">
        <div className="card-header py-3">
          <h3 className="m-0 font-weight-bold text-primary">User Edit Form</h3>
        </div>
        <div className="card-body">
          <form onSubmit={formik.handleSubmit}>
            <div className="row">
              <div className="col-lg-6">
                <label htmlFor="name">
                  Name <span className="text-danger">*</span>
                </label>
                <input
                  type={'text'}
                  name="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  className="form-control"
                  style={{
                    border: formik.errors.name
                      ? '1px solid red'
                      : formik.values.name !== ''
                      ? '1px solid green'
                      : '',
                  }}
                />
                <small style={{ color: 'red' }}>{formik.errors.name}</small>
                {formik.values.name ? (
                  <small style={{ color: 'green' }}>Looks good!</small>
                ) : null}
              </div>
              <div className="col-lg-6">
                <label htmlFor="position">
                  Position <span className="text-danger">*</span>
                </label>
                <input
                  type={'text'}
                  name="position"
                  onChange={formik.handleChange}
                  value={formik.values.position}
                  className="form-control"
                  style={{
                    border: formik.errors.position
                      ? '1px solid red'
                      : formik.values.position !== ''
                      ? '1px solid green'
                      : '',
                  }}
                />
                <small style={{ color: 'red' }}>{formik.errors.position}</small>
                {formik.values.position ? (
                  <small style={{ color: 'green' }}>Looks good!</small>
                ) : null}
              </div>
              <div className="col-lg-6">
                <label htmlFor="office">
                  Office <span className="text-danger">*</span>
                </label>
                <input
                  type={'text'}
                  name="office"
                  onChange={formik.handleChange}
                  value={formik.values.office}
                  className="form-control"
                  style={{
                    border: formik.errors.office
                      ? '1px solid red'
                      : formik.values.office !== ''
                      ? '1px solid green'
                      : '',
                  }}
                />
                <small style={{ color: 'red' }}>{formik.errors.office}</small>
                {formik.values.office ? (
                  <small style={{ color: 'green' }}>Looks good!</small>
                ) : null}
              </div>
              <div className="col-lg-6">
                <label htmlFor="age">
                  Age <span className="text-danger">*</span>
                </label>
                <input
                  type={'number'}
                  name="age"
                  onChange={formik.handleChange}
                  value={formik.values.age}
                  className="form-control"
                  style={{
                    border: formik.errors.age
                      ? '1px solid red'
                      : formik.values.age >= 18
                      ? '1px solid green'
                      : '',
                  }}
                  min={'0'}
                />
                <small style={{ color: 'red' }}>{formik.errors.age}</small>
                {formik.values.age >= 18 ? (
                  <small style={{ color: 'green' }}>Looks good!</small>
                ) : null}
              </div>
              <div className="col-lg-6">
                <label htmlFor="date">
                  Start Date <span className="text-danger">*</span>
                </label>
                <input
                  type={'date'}
                  name="startDate"
                  onChange={formik.handleChange}
                  value={formik.values.startDate}
                  className="form-control"
                  style={{
                    border: formik.errors.startDate
                      ? '1px solid red'
                      : formik.values.startDate !== ''
                      ? '1px solid green'
                      : '',
                  }}
                />
                <small style={{ color: 'red' }}>
                  {formik.errors.startDate}
                </small>
                {formik.values.startDate ? (
                  <small style={{ color: 'green' }}>Looks good!</small>
                ) : null}
              </div>
              <div className="col-lg-6">
                <label htmlFor="salary">
                  Salary <span className="text-danger">*</span>
                </label>
                <input
                  type={'number'}
                  name="salary"
                  onChange={formik.handleChange}
                  value={formik.values.salary}
                  className="form-control"
                  style={{
                    border: formik.errors.salary
                      ? '1px solid red'
                      : formik.values.salary >= 10000
                      ? '1px solid green'
                      : '',
                  }}
                />
                <small style={{ color: 'red' }}>{formik.errors.salary}</small>
                {formik.values.salary >= 10000 ? (
                  <small style={{ color: 'green' }}>Looks good!</small>
                ) : null}
              </div>
              <div className="col-lg-6 mt-3">
                <input
                  type={'submit'}
                  disabled={Object.keys(formik.errors).length !== 0}
                  className="btn btn-primary"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <button
        onClick={() => {
          navigate(-1)
        }}
        className={'btn btn-warning mt-5'}
      >
        Go Back
      </button>
    </div>
  )
}

export default UserEdit
