import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import DashboardLayout from './layouts/DashboardLayout'
import Home from './pages/Home'
import Instructores from './pages/Instructores'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DashboardLayout />}>
          <Route index element={<Home />} />
          <Route path='instructores' element={<Instructores />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App