'use client'
import React from 'react';
import type {FC} from 'react';
import Link from "next/link";
import {Button} from "@mui/material";

type TypeLinkProps = {
    name: string;
    href: string;
}
const NavigateLink:FC<TypeLinkProps> = ({name, href}) => {

    return (
        <Link href={ href}>
            <Button color="inherit" >{name}</Button>
        </Link>

    );
};

export default NavigateLink;
