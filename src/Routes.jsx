import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Page404 from "./pages/404Page";
import Wellcome from "./pages/Wellcome";
import LogIn from './pages/LogIn';
import Home from './pages/Home'

/**
 * Routes component containing routes for the whole application
 * @returns {JSX}
 */
const MyRoutes = () => (
    <Routes>
        <Route path='/' element={<Wellcome/>} />
        <Route path='/login' element={<LogIn/>} />
        <Route path='/home' element={<Home/>} />
        <Route component={Page404} />
    </Routes>
);

export default MyRoutes;