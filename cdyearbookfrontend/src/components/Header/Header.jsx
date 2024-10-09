import './Header.css';
 import yrData from "../../resources/yearEntries.json"
import { NavLink } from 'react-router-dom';
import logo from './img/Code-Differently-logo-2020-2.png';
import { useState } from 'react';
import { useEffect } from 'react';

export function Header () {

    const [yearData, setYearData] = useState([]);

    useEffect(() => {

        const getYearData = async () => {
            setYearData(yrData);
        };
        getYearData();
    }, []);
    console.log(yearData);
    return (
        <div className='header bg-slate-400'>
            <NavLink to= "/" className="logo">
                <img src={logo} alt="code-differently-logo"/>
            </NavLink>
            <div className='head-links'>
                {yearData.map((item) => (
                    <NavLink to={`/${item.cohort}`} onClick={() => window.scrollTo(0, 0) } key={item.cohort}>
                            {item.cohort}
                    </NavLink>
                ))}
            </div>
          
        </div>
        );
    }