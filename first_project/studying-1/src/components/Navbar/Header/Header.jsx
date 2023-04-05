import * as React from 'react';
import { Link } from 'react-router-dom';
import header from './Header.module.css';

export const Header = (props) => {

    return (
        <header className={header.header}>
            <img src='https://i.pinimg.com/originals/f6/7a/3a/f67a3a261f0c952640f9c1d214d73e96.png' />
            <p>{props.isAuth ? props.login : <Link to='/login'>Войти</Link>}</p>
        </header>
    )
};

