import './App.css'

import { Routes, Route } from 'react-router-dom'

import MainLayout from './components/MainLayout'

import Home from './pages/Home'

function App() {


  return (
    <>

      <MainLayout>

        <Routes>

          <Route path="/home" element={<Home />}></Route>

        </Routes>

      </MainLayout>
    </>
  )
}

export default App
