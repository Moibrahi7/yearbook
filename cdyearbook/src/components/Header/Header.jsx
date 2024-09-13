import './Header.css';
import yearData from "../../resources/yearEntries.json"
import { NavLink } from 'react-router-dom';
export function Header () {
    return (
        <div className='header'>
            <NavLink to= "/">
                <img className="logo" src={"img/Code-Differently-logo-2020-2.png"} alt=""/>
            </NavLink>
            <div className='head-links'>
                {yearData.map((item) => (
                    <NavLink to={`/${item.cohort}`} key={item.cohort}>
                            {item.cohort}
                    </NavLink>
                ))}
            </div>
            <div></div>
        </div>
        );
    }