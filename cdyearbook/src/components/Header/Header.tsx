import './Header.scss';
import React from 'react';
import logo from './assets/Code-Differently-logo-2020-2.png';

export const Header: React.FC = () => {
    return (
        <header>
            <img className="logo" src={logo} alt=""/>
            <h1>Cohort v24.1</h1>
        </header>
        );
    }