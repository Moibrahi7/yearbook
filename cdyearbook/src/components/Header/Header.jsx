import './Header.css';
import yearData from "../../resources/yearEntries.json"
import { NavLink } from 'react-router-dom';
import logo from './img/Code-Differently-logo-2020-2.png';
export function Header () {
    return (
        <div className='header bg-slate-500'>
            <NavLink to= "/" className="logo">
                <img src={logo} alt="code-differently-logo"/>
            </NavLink>
            <div className='head-links'>
                {yearData.map((item) => (
                    <NavLink to={`/${item.cohort}`} key={item.cohort}>
                            {item.cohort}
                    </NavLink>
                ))}
            </div>
          
        </div>
        );
    }