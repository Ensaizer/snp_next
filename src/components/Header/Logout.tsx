'use client'
import React from 'react';
import {redirect} from "next/navigation";
import {Button} from "@mui/material";

const Logout = () => {
    const clickHandler = async() =>{
       const response =  await fetch('api/logout');
       if(response.ok) redirect('/')
    } ;

    return (
        <Button color="inherit" onClick={clickHandler}>
            Выход
        </Button>
    );
};

export default Logout;
