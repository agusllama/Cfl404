import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import AppLayout from './layouts/AppLayout'
import Home from './pages/Home'
import Instructores from './pages/Instructores'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path='instructores' element={<Instructores />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App