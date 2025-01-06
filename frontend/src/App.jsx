import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UserLogin from "./pages/UserLogin.jsx";
import UserSignup from "./pages/UserSignup.jsx";
import CaptainLogin from "./pages/CaptainLogin.jsx";
import CaptainSignup from "./pages/CaptainSignup.jsx";


function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/login' element={<UserLogin/>} />
                <Route path='/signup' element={<UserSignup/>} />
                <Route path='/captain-login' element={<CaptainLogin/>}/>
                <Route path='/captain-signup' element={<CaptainSignup/>}/>
                <Route path='*' element={<div>404 Not Found</div>} />
            </Routes>
        </div>
    );
}

export default App;
