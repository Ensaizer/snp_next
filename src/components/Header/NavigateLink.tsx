'use client'
import React from 'react';
import type {FC} from 'react';
import Link from "next/link";

type TypeLinkProps = {
    name: string;
    href: string;
    classNameProps: string
}
const NavigateLink:FC<TypeLinkProps> = ({name, href, classNameProps}) => {

    return (
        <li>
            <Link className={classNameProps} href={href}>{name}</Link>
        </li>
    );
};

export default NavigateLink;
