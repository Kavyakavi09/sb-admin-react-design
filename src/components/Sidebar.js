/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../pages/UserContext'

function Sidebar() {
  let userContext = useContext(UserContext)
  return (
    // <!-- Sidebar -->
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/* <!-- Sidebar - Brand --> */}
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="#"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">
          SB Admin <sup>2</sup> {userContext.userName}
        </div>
      </a>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider my-0" />

      {/* <!-- Nav Item - Dashboard --> */}
      <li className="nav-item">
        <Link className="nav-link" to={'/'}>
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </Link>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider" />

      {/* <!-- Heading --> */}
      <div className="sidebar-heading">Interface</div>

      {/* <!-- Nav Item - Users --> */}
      <li className="nav-item">
        <Link className="nav-link" to={'/users'}>
          <i className="fas fa-fw fa-user"></i>
          <span>Users</span>
        </Link>
      </li>

      {/* <!-- Nav Item - products --> */}
      <li className="nav-item">
        <Link className="nav-link" to={'/products'}>
          <i className="fas fa-fw fa-table"></i>
          <span>Products</span>
        </Link>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider d-none d-md-block" />

      {/* <!-- Sidebar Message --> */}
      <div className="sidebar-card d-none d-lg-flex">
        <img
          className="sidebar-card-illustration mb-2"
          src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_rocket.svg"
          alt="..."
        />
        <p className="text-center mb-2">
          <strong>SB Admin Pro</strong> is packed with premium features,
          components, and more!
        </p>

        <a
          className="btn btn-success btn-sm"
          href="https://startbootstrap.com/theme/sb-admin-pro"
          target={'_blank'}
        >
          Upgrade to Pro!
        </a>
      </div>
    </ul>
    //  <!-- End of Sidebar -->
  )
}

export default Sidebar
