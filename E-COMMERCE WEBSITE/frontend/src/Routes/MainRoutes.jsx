import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import Admin from '../Pages/Admin'
import ProductPage from '../Pages/ProductPage'
import AddPro from '../Pages/AddProduct'

const MainRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/signup' element={<Signup/>} />
                <Route path='/admin' element={<Admin/>} />
                <Route path='/product' element={<ProductPage/>} />
                <Route path='/addproduct' element={<AddPro/>} />
            </Routes>
        </>
    )
}

export default MainRoutes
