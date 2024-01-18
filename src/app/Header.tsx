import React from 'react';
import Link from "next/link";

const Header = async () => {
    return (
        <header className="header">
            <Link href="/">Главная</Link>
            <Link href="/profile">Профиль</Link>
            <Link href="/login">Авторизация</Link>
            <Link href="/registration">Регистрация</Link>
        </header>
    );
};

export default Header;
