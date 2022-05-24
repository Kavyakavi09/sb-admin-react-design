import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from './UserContext'

function CreateProduct() {
  const [id, setId] = useState(0)
  const [owner, setOwner] = useState('')
  const [email, setEmail] = useState('')
  const [name, setCat] = useState('')
  const [origin, setOrigin] = useState('')
  const [price, setPrice] = useState(0)
  let submitContext = useContext(UserContext)
  let navigate = useNavigate()
  function handleSubmit() {
    let newStorage = [
      ...submitContext.product,
      { id, owner, email, name, origin, price },
    ]
    submitContext.setProduct(newStorage)
    navigate('/products')
  }
  return (
    <div className="container py-3">
      <div className="card shadow">
        <div className="card-header py-3">
          <h3 className="m-0 font-weight-bold text-primary">Create Cat Form</h3>
        </div>
        <div className="card-body">
          <form
            onSubmit={() => {
              handleSubmit()
            }}
          >
            <div className="row">
              <div className="col-lg-6 mb-2">
                <label>Id</label>
                <input
                  type={'number'}
                  name="id"
                  className="form-control"
                  placeholder="Enter your id"
                  onChange={(e) => {
                    setId(e.target.value)
                  }}
                />
              </div>
              <div className="col-lg-6 mb-2">
                <label>Owner Name</label>
                <input
                  type={'text'}
                  name="owner"
                  placeholder="Enter the name of owner"
                  className="form-control"
                  onChange={(e) => {
                    setOwner(e.target.value)
                  }}
                />
              </div>
              <div className="col-lg-6 mb-2">
                <label>Email</label>
                <input
                  type={'email'}
                  name="email"
                  placeholder="Enter your email"
                  className="form-control"
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                />
              </div>
              <div className="col-lg-6 mb-2">
                <label>Cat Name</label>
                <input
                  type={'text'}
                  placeholder="Enter the cat name"
                  name="cat"
                  className="form-control"
                  onChange={(e) => {
                    setCat(e.target.value)
                  }}
                />
              </div>
              <div className="col-lg-6 mb-2">
                <label>Origin</label>
                <input
                  type={'text'}
                  placeholder="Enter the origin"
                  name="origin"
                  className="form-control"
                  onChange={(e) => {
                    setOrigin(e.target.value)
                  }}
                />
              </div>
              <div className="col-lg-6 mb-2">
                <label>Price</label>
                <input
                  type={'number'}
                  placeholder="Enter the price"
                  name="price"
                  className="form-control"
                  onChange={(e) => {
                    setPrice(e.target.value)
                  }}
                />
              </div>
              <div className="col-lg-6">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div>
        <button
          className="btn btn-warning mt-5"
          onClick={() => {
            navigate(-1)
          }}
        >
          Go Back
        </button>
      </div>
    </div>
  )
}

export default CreateProduct
