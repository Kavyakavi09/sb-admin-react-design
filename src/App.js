import './App.css'
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
import Login from './pages/Login'
import SharedLayout from './pages/SharedLayout'

function App() {
  let userName = 'Kavya K'

  const [user, setUser] = useState([])
  return (
    <BrowserRouter>
      <UserProvider value={{ userName, user, setUser }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<SharedLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
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
          </Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App
