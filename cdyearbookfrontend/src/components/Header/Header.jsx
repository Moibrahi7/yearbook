import './Header.css';
 import yrData from "../../resources/yearEntries.json"
import { NavLink } from 'react-router-dom';
import logo from './img/Code-Differently-logo-2020-2.png';
import { useContext, useState } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../../pages/loginpage/AuthContext';

export function Header () {

    const { email } = useContext(AuthContext);

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
            <div className='login-section'>
                {getProf(email)}
            </div>
        </div>
        );
    }

    function getProf(email){
        if (email === ''){
            return(
                <NavLink to="./login" >Sign In</NavLink>
            )
        }
        else{
            return(
                <p>{email}</p>
            )
        }
    }