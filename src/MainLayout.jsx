import React from 'react';
import { Outlet } from 'react-router';
import Header from './components/Header';

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className='w-11/12 mx-auto mt-5'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;