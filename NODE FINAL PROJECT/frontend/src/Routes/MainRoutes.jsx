import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import MyProduct from '../Pages/MyProduct'
import Admin from '../Pages/Admin'
import AddProduct from '../Pages/AddProduct'
import SingleProduct from '../Pages/SingleProduct'
import EditProduct from '../Pages/EditProduct'

const MainRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/addPro' element={<AddProduct/>}></Route>
        <Route path='/allProduct/:id' element={<SingleProduct/>}></Route>
        <Route path='/editPro/:id' element={<EditProduct/>}></Route>
        <Route path='/myPro' element={<MyProduct/>}></Route>
    </Routes>
    </>
  )
}

export default MainRoutes