import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import Admin from '../Pages/Admin'
import ProductPage from '../Pages/ProductPage'

const MainRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/admin' element={<Admin/>} />
                <Route path='/product' element={<ProductPage />} />
            </Routes>
        </>
    )
}

export default MainRoutes
