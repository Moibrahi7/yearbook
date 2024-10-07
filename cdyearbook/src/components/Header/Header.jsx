import './Header.css';
// import yearData from "../../resources/yearEntries.json"
import { NavLink } from 'react-router-dom';
import logo from './img/Code-Differently-logo-2020-2.png';
import { useState } from 'react';
import { useEffect } from 'react';
import { db } from '../../../firebase';
import { collection, getDocs } from 'firebase/firestore';

export function Header () {

    const [yearData, setYearData] = useState([]);

    useEffect(() => {
        const getYearData = async () => {
            const data = await getDocs(collection(db, 'yearEntries'));
            setYearData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getYearData();
    }, []);
    console.log(yearData);
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