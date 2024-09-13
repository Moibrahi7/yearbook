import './Header.css';
import yearData from "../../resources/yearEntries.json"
import { Link } from 'react-router-dom';
export function Header () {
    return (
        <div className='header'>
            <img className="logo" src={"img/Code-Differently-logo-2020-2.png"} alt=""/>
            <div className='head-links'>
                {yearData.map((item) => (
                    <a href={`/${item.cohort}`} key={item.cohort}>
                            {item.cohort}
                    </a>
                ))}
            </div>
            <div></div>
        </div>
        );
    }