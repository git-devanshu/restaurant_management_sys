import React, { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {checkAuthority} from './utils/helperFunctions';
//import components or pages
import Signup from './pages/Signup';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';


function App() {
    return (
        <ChakraProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LandingPage/>}/>
                    <Route path='/signup' element={<Signup/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/forgot-password' element={<ForgotPassword/>}/>
                    <Route path='/home' element={<Home/>}/>
                    {/* <Route path='' element={}/> */}
                    {/* <Route path='' element={}/> */}
                    {/* <Route path='' element={}/> */}
                    {/* <Route path='' element={}/> */}
                    {/* <Route path='' element={}/> */}
                    {/* <Route path='' element={}/> */}
                    {/* <Route path='' element={}/> */}
                    {/* <Route path='' element={}/> */}
                    {/* <Route path='' element={}/> */}
                    {/* <Route path='' element={}/> */}
                    {/* <Route path='' element={}/> */}
                    <Route path='/:notfound' element={<PageNotFound/>}/>
                </Routes>
            </BrowserRouter>
        </ChakraProvider>
    )
}

const ProtectedHome = () =>{
    const auth = checkAuthority('user') || checkAuthority('admin');
    if(auth){
        return <Home/>
    }
    else{
        return <Navigate to='/login'/>
    }
}

export default App
