import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Page404 from "./pages/404Page";
import Wellcome from "./pages/Wellcome";
import Step2 from './pages/Step2';

/**
 * Routes component containing routes for the whole application
 * @returns {JSX}
 */
const MyRoutes = () => (
    <Routes>
        <Route path='/' element={<Wellcome/>} />
        <Route exact path='/Step2' element={<Step2/>} />
        <Route component={Page404} />
    </Routes>
);

export default MyRoutes;