import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Start from './pages/Start.jsx';
import UserLogin from "./pages/UserLogin.jsx";
import UserSignup from "./pages/UserSignup.jsx";
import CaptainLogin from "./pages/CaptainLogin.jsx";
import CaptainSignup from "./pages/CaptainSignup.jsx";
import UserProtectedWrapper from "./pages/UserProtectedWrapper.jsx";
import UserLogout from "./pages/UserLogout.jsx";
import CaptainHome from "./pages/CaptainHome.jsx";
import CaptainProtectedWrapper from "./pages/CaptainProtectedWrapper.jsx";
import CaptainLogout from "./pages/CaptainLogout.jsx";
import Riding from "./pages/Riding.jsx";



function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Start/>} />
                <Route path='/home' element={
                    <UserProtectedWrapper>
                        <Home/>
                    </UserProtectedWrapper>
                } />
                <Route path='/captain-home' element={
                    <CaptainProtectedWrapper>
                        <CaptainHome/>
                    </CaptainProtectedWrapper>
                }
                />
                <Route path='/login' element={<UserLogin/>} />
                <Route path='/signup' element={<UserSignup/>} />
                <Route path='/captain-login' element={<CaptainLogin/>}/>
                <Route path='/captain-signup' element={<CaptainSignup/>}/>
                <Route path='*' element={<div>404 Not Found</div>} />
                <Route path='/user/logout' element={
                    <UserProtectedWrapper>
                        <UserLogout/>
                </UserProtectedWrapper>
                } />
                <Route path='/captain/logout' element={
                    <CaptainProtectedWrapper>
                        <CaptainLogout/>
                    </CaptainProtectedWrapper>
                }
                />
                <Route path='/riding' element={
                    <UserProtectedWrapper>
                        <Riding/>
                    </UserProtectedWrapper>
                    } />
            </Routes>
        </div>
    );
}

export default App;
