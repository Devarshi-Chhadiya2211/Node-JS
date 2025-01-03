import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Signup from '../Pages/Signup'
import Login from '../Pages/Login'
import SingleBlog from '../Pages/SingleBlog'
import ResetPassword from '../Pages/Reset-Password'
import AddBlog from '../Pages/AddBlog'
import MyBlog from '../Pages/MyBlog'

const MainRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/reset-password' element={<ResetPassword/>}></Route>
        <Route path='/addblog' element={<AddBlog/>}></Route>
        <Route path='/allblog/:id' element={<SingleBlog/>}></Route>
        <Route path='/myblog' element={<MyBlog/>}></Route>

        {/* <Route path='/aboutus' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/addblog' element={<CreateBlog/>}></Route>
        <Route path='/singleblog' element={<SingleBlog/>}></Route> */}
    </Routes>
    </>
  )
}

export default MainRoutes