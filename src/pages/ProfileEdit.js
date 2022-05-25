/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import * as yup from 'yup'

function ProfileEdit() {
  let { id } = useParams()
  let navigate = useNavigate()
  let formik = useFormik({
    initialValues: {
      owner: '',
      email: '',
      name: '',
      origin: '',
      price: '',
      rating: '',
    },
    validationSchema: yup.object({
      owner: yup
        .string()
        .max(25, 'Must be 25 characters or less')
        .required('* Required'),
      email: yup.string().required('* Required').email('Enter a vaild Email'),
      name: yup.string().required('* Required'),
      origin: yup.string().required('* Required'),
      price: yup.number('Enter only numeric values').required('* Required'),
      rating: yup
        .number('Enter only numeric values')
        .required('* Required')
        .min(1, 'Rating can not be less than 1')
        .max(5, 'Rating can not be higher than 5'),
    }),

    onSubmit: async (values) => {
      await axios.put(
        `https://6251823cdfa31c1fbd6ee6d2.mockapi.io/Products/${id}`,
        values,
      )
      navigate('/profile', { replace: true })
    },
  })
  useEffect(() => {
    async function fetchData() {
      try {
        let user = await axios.get(
          `https://6251823cdfa31c1fbd6ee6d2.mockapi.io/Products/${id}`,
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
          <h3 className="m-0 font-weight-bold text-primary">Cat Edit Form</h3>
        </div>
        <div className="card-body">
          <form onSubmit={formik.handleSubmit}>
            <div className="row">
              <div className="col-lg-6">
                <label htmlFor="owner">
                  Owner Name <span className="text-danger">*</span>
                </label>
                <input
                  type={'text'}
                  name="owner"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.owner}
                  className="form-control"
                  style={{
                    border: formik.errors.owner
                      ? '1px solid red'
                      : formik.values.owner.length <= 25 &&
                        formik.values.owner.length !== 0
                      ? '1px solid green'
                      : '',
                  }}
                />
                {formik.touched.owner && formik.errors.owner ? (
                  <small style={{ color: 'red' }}>{formik.errors.owner}</small>
                ) : null}
                {formik.values.owner.length <= 25 &&
                formik.values.owner.length !== 0 ? (
                  <small style={{ color: 'green' }}>Looks good!</small>
                ) : null}
              </div>
              <div className="col-lg-6">
                <label htmlFor="email">
                  Email <span className="text-danger">*</span>
                </label>
                <input
                  type={'email'}
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="form-control"
                  style={{
                    border: formik.errors.email
                      ? '1px solid red'
                      : formik.values.email !== '' && !formik.errors.email
                      ? '1px solid green'
                      : '',
                  }}
                />
                {formik.touched.email && formik.errors.email ? (
                  <small style={{ color: 'red' }}>{formik.errors.email}</small>
                ) : null}

                {formik.values.email !== '' && !formik.errors.email ? (
                  <small style={{ color: 'green' }}>Looks good!</small>
                ) : null}
              </div>
              <div className="col-lg-6">
                <label htmlFor="name">
                  Cat Name <span className="text-danger">*</span>
                </label>
                <input
                  type={'text'}
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
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
                {formik.touched.name && formik.errors.name ? (
                  <small style={{ color: 'red' }}>{formik.errors.name}</small>
                ) : null}

                {formik.values.name ? (
                  <small style={{ color: 'green' }}>Looks good!</small>
                ) : null}
              </div>
              <div className="col-lg-6">
                <label htmlFor="origin">
                  Origin <span className="text-danger">*</span>
                </label>
                <input
                  type={'text'}
                  name="origin"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.origin}
                  className="form-control"
                  style={{
                    border: formik.errors.origin
                      ? '1px solid red'
                      : formik.values.origin !== ''
                      ? '1px solid green'
                      : '',
                  }}
                />
                {formik.touched.origin && formik.errors.origin ? (
                  <small style={{ color: 'red' }}>{formik.errors.origin}</small>
                ) : null}

                {formik.values.origin !== '' ? (
                  <small style={{ color: 'green' }}>Looks good!</small>
                ) : null}
              </div>
              <div className="col-lg-6">
                <label htmlFor="price">
                  Price <span className="text-danger">*</span>
                </label>
                <input
                  type={'number'}
                  name="price"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.price}
                  className="form-control"
                  style={{
                    border: formik.errors.price
                      ? '1px solid red'
                      : formik.values.price !== ''
                      ? '1px solid green'
                      : '',
                  }}
                  min={'1'}
                />
                {formik.touched.price && formik.errors.price ? (
                  <small style={{ color: 'red' }}>{formik.errors.price}</small>
                ) : null}

                {formik.values.price ? (
                  <small style={{ color: 'green' }}>Looks good!</small>
                ) : null}
              </div>
              <div className="col-lg-6">
                <label htmlFor="rating">
                  Rating <span className="text-danger">*</span>
                </label>
                <input
                  type={'number'}
                  name="rating"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.rating}
                  className="form-control"
                  style={{
                    border: formik.errors.rating
                      ? '1px solid red'
                      : !formik.errors.rating && formik.values.rating !== ''
                      ? '1px solid green'
                      : '',
                  }}
                  min={'1'}
                />
                {formik.touched.rating && formik.errors.rating ? (
                  <small style={{ color: 'red' }}>{formik.errors.rating}</small>
                ) : null}

                {!formik.errors.rating && formik.values.rating !== '' ? (
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

export default ProfileEdit
