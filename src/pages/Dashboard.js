/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import DashboardCard from '../components/DashboardCard'
import LineChart from '../components/LineChart'
import PieChart from '../components/PieChart'
import ProjectCard from '../components/ProjectCard'
import ColorSystem from '../components/ColorSystem'
import Illustration from '../components/Illustration'
import UserContext from './UserContext'

function Dashboard() {
  let userContext = useContext(UserContext)
  let cardBanner = [
    {
      title: 'Earnings (Monthly)',
      price: '$40,000',
      icon: 'fa-calendar',
      borderLeft: 'border-left-primary',
      color: 'text-primary',
    },
    {
      title: 'Earnings (Annual)',
      price: '$215,000',
      icon: 'fa-dollar-sign',
      borderLeft: 'border-left-success',
      color: 'text-success',
    },
    {
      title: 'Tasks',
      price: '50%',
      icon: 'fa-clipboard-list',
      progress: true,
      borderLeft: 'border-left-info',
      color: 'text-info',
    },
    {
      title: 'Pending Requests',
      price: '18',
      icon: 'fa-comments ',
      borderLeft: 'border-left-warning',
      color: 'text-warning',
    },
  ]

  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">
          Welcome, {userContext.user}!😊
        </h1>
        <Link
          to="/report"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Generate
          Report
        </Link>
      </div>
      <div className="row">
        {cardBanner.map((card, index) => {
          return <DashboardCard {...card} key={index} />
        })}
      </div>
      <div className="row">
        <LineChart />
        <PieChart />
      </div>

      <div className="row">
        <div className="col-lg-6 mb-4">
          <ProjectCard />
          <ColorSystem />
        </div>
        <div className="col-lg-6 mb-4">
          <Illustration />
        </div>
      </div>
    </>
  )
}

export default Dashboard
