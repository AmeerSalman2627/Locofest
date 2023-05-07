import React from "react";
import Header from "./Components/Header/Header";
import {Outlet} from 'react-router-dom';

const AuthLayout = () => {
    return (
        <>
        <Header></Header>
        <Outlet></Outlet>
        </>
    )
};

export default AuthLayout;