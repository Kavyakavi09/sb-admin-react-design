import React, { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import * as yup from 'yup';
import { useFormik } from 'formik';
import swal from 'sweetalert';
import axios from 'axios';
import { useState } from 'react';

function Login() {
  const [errorMsg, setErrorMsg] = useState('');
  const [succMsg, setSuccMs] = useState('');
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: yup.object({
      email: yup
        .string('Enter your email')
        .required('* Required')
        .email('Enter a vaild Email'),
      password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('*Password is required'),
    }),
    onSubmit: async (values) => {
      try {
        let loginData = await axios.post(
          'https://password-reset-project.herokuapp.com/api/users/signin',
          values
        );
        window.localStorage.setItem('myapptoken', loginData.data.token);
        console.log(loginData);
        setSuccMs(loginData.data.msg);
        swal({
          title: 'Welcome!',
          text: 'You have successfully Logged in!',
          icon: 'success',
          button: 'Aww yiss!',
        });
        navigate('/dashboard');
      } catch (error) {
        setErrorMsg(error.response.data.message);
        console.log(error);
      }
    },
  });
  return (
    <div>
      {errorMsg ? (
        <div className='alert alert-danger text-center mt-5' role='alert'>
          {errorMsg}
        </div>
      ) : (
        ''
      )}
      {succMsg ? (
        <div className='alert alert-success text-center mt-5' role='alert'>
          {succMsg}
        </div>
      ) : (
        ''
      )}
      <div className='container'>
        <div className='row'>
          <div className='col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto'>
            <div className='card border-0 shadow rounded-5 my-5'>
              <div className='card-body p-4 p-sm-5'>
                <h5 className='card-title text-center mb-3 fw-light fs-5'>
                  Sign In
                </h5>
                <form onSubmit={formik.handleSubmit}>
                  <div className='form-floating mb-3'>
                    <input
                      type='email'
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      name='email'
                      value={formik.values.email}
                      className='form-control'
                      id='floatingInput'
                      placeholder='name@example.com'
                      style={{
                        border: formik.errors.email
                          ? '1px solid red'
                          : formik.values.email !== '' && !formik.errors.email
                          ? '1px solid green'
                          : '',
                      }}
                    />
                    <label htmlFor='floatingInput'>Email address</label>
                    {formik.touched.email && formik.errors.email ? (
                      <small style={{ color: 'red' }}>
                        {formik.errors.email}
                      </small>
                    ) : null}

                    {formik.values.email !== '' && !formik.errors.email ? (
                      <small style={{ color: 'green' }}>Looks good!</small>
                    ) : null}
                  </div>
                  <div className='form-floating mb-3'>
                    <input
                      type='password'
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      name='password'
                      className='form-control'
                      id='floatingPassword'
                      placeholder='Password'
                      style={{
                        border: formik.errors.password
                          ? '1px solid red'
                          : formik.values.password !== '' &&
                            !formik.errors.password
                          ? '1px solid green'
                          : '',
                      }}
                    />
                    <label htmlFor='floatingPassword'>Password</label>
                    {formik.touched.password && formik.errors.password ? (
                      <small style={{ color: 'red' }}>
                        {formik.errors.password}
                      </small>
                    ) : null}
                    {formik.values.password.length >= 8 &&
                    formik.values.password.length !== 0 ? (
                      <small style={{ color: 'green' }}>Looks good!</small>
                    ) : null}
                  </div>

                  <div className='form-check mb-3'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value=''
                      id='rememberPasswordCheck'
                    />
                    <label
                      className='form-check-label'
                      htmlFor='rememberPasswordCheck'>
                      Remember password
                    </label>
                  </div>
                  <div className='d-grid'>
                    <button
                      className='btn btn-primary btn-login text-uppercase fw-bold'
                      type='submit'>
                      Sign in
                    </button>
                  </div>
                  <div className='mt-3'>
                    <Link to={'/forgot-password'}>Forgot Password?</Link>
                  </div>
                  <div className='mt-2'>
                    Don't have an account? <Link to={'/register'}>Sign up</Link>{' '}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
