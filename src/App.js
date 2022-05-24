import './App.css'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import CreateUser from './pages/CreateUser'
import UserView from './pages/UserView'
import UserEdit from './pages/UserEdit'
import Error from './pages/Error'
import Profile from './pages/Profile'
import DashboardReport from './pages/DashboardReport'
import CreateProfile from './pages/CreateProfile'
import ProfileView from './pages/ProfileView'
import ProfileEdit from './pages/ProfileEdit'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UserProvider } from './pages/UserContext'
import { useState } from 'react'

function App() {
  let userName = 'Kavya K'
  const [user, setUser] = useState([])
  return (
    <BrowserRouter>
      <div id="wrapper">
        <UserProvider value={{ userName, user, setUser }}>
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Topbar />
              <div className="container-fluid">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="users" element={<Users />} />
                  <Route path="users-create" element={<CreateUser />} />
                  <Route path="profile-create" element={<CreateProfile />} />
                  <Route path="profile-view:id" element={<ProfileView />} />
                  <Route path="users-view:id" element={<UserView />} />
                  <Route path="profile-edit:id" element={<ProfileEdit />} />
                  <Route path="users-edit:id" element={<UserEdit />} />
                  <Route path="profile" element={<Profile />} />
                  <Route path="report" element={<DashboardReport />} />
                  <Route path="*" element={<Error />} />
                </Routes>
              </div>
            </div>
            <footer className="sticky-footer bg-white">
              <div className="container my-auto">
                <div className="copyright text-center my-auto">
                  <span>Copyright &copy; My Website 2022</span>
                </div>
              </div>
            </footer>
          </div>
        </UserProvider>
      </div>
    </BrowserRouter>
  )
}

export default App
