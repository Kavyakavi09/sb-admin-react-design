import './App.css'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Dashboard from './pages/Dashboard'
import Error from './pages/Error'
import Product from './pages/Product'
import DashboardReport from './pages/DashboardReport'
import { UserProvider } from './pages/UserContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import productItems from './components/ProductsItem'
import CreateProduct from './pages/CreateProduct'
import ViewProduct from './pages/ViewProduct'
import EditProduct from './pages/EditProduct'

function App() {
  const userName = 'Kavya K'
  const [users, setUsers] = useState([])
  const [product, setProduct] = useState(productItems)
  return (
    <BrowserRouter>
      <div id="wrapper">
        <UserProvider
          value={{ userName, users, setUsers, product, setProduct }}
        >
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Topbar />
              <div className="container-fluid">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/product-create" element={<CreateProduct />} />
                  <Route path="/product-view:id" element={<ViewProduct />} />
                  <Route path="/product-edit:id" element={<EditProduct />} />
                  <Route path="/products" element={<Product />} />
                  <Route path="/report" element={<DashboardReport />} />
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
