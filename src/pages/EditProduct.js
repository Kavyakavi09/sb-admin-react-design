/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-expressions */
import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import UserContext from './UserContext'

function EditProduct() {
  const [id, setId] = useState(0)
  const [owner, setOwner] = useState('')
  const [email, setEmail] = useState('')
  const [name, setCat] = useState('')
  const [origin, setOrigin] = useState('')
  const [price, setPrice] = useState(0)
  let params = useParams()
  let viewContext = useContext(UserContext)

  useEffect(() => {
    console.log(params)
    if (params.id) {
      getData()
    }
  }, [])

  function getData() {
    let data = viewContext.product[params.id]
    setId(data.id)
    setOwner(data.owner)
    setEmail(data.email)
    setCat(data.name)
    setOrigin(data.origin)
    setPrice(data.price)
  }

  let navigate = useNavigate()

  function handleSubmit() {
    viewContext.product[params.id] = {
      id,
      owner,
      email,
      name,
      origin,
      price,
    }
    viewContext.setProduct([...viewContext.product])
    navigate('/products')
  }
  return (
    <div className="container py-3">
      <div className="card shadow">
        <div className="card-header py-3">
          <h3 className="m-0 font-weight-bold text-primary">Edit Cat Form</h3>
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
                  value={id}
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
                  value={owner}
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
                  value={email}
                  name="email"
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
                  value={name}
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
                  value={origin}
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
                  value={price}
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

export default EditProduct
