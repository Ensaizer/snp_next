'use client'
import React from 'react';
import {redirect} from "next/navigation";

const Logout = () => {
    const clickHandler = async() =>{
       const response =  await fetch('api/logout');
       if(response.ok) redirect('/')
    } ;

    return (
        <button className="text-2xl px-10 hover:bg-accent" onClick={clickHandler}>
            Выход
        </button>
    );
};

export default Logout;
