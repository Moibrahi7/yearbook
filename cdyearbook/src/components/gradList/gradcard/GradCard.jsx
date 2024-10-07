// import data from "../../../resources/yearEntries.json";
import "./GradCard.css"
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Paper } from "@mui/material";
import { useState } from "react";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { collectionGroup, getDocs, query, where, orderBy} from "firebase/firestore";
import { db } from "../../../../firebase";
import { useEffect } from "react";

export function GradCard () {
    const [amountOfCards, setAmountOfCards] = useState(6);
    const { cohort } = useParams();
    const [gradData, setGradData] = useState([]);
    const coData = query(collectionGroup(db, 'entries') , where('cohort', '==', parseFloat(cohort)), orderBy('entryNum', 'asc'));

    useEffect(() => {
        const getFoo = async () => {
            const data = await getDocs(coData);
            setGradData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getFoo();
    }, []);

    const loadMore = () => {
        setAmountOfCards(prevAmount => prevAmount + 6); 
    };

    return (
        <div className="grad-card-container">
            <div className="add-btn">
                <NavLink to={`/${cohort}/add`}>
                    Add
                </NavLink>
            </div>
            <div className="grad-card" id="grad-card">
                {gradData.slice(0, amountOfCards).map((gradInfo) => (
                   <Paper key={gradInfo.entryNum}>
                       <div className="item" key={gradInfo.entryNum}>
                           <li>
                               <img src={"/img/" + gradInfo.img} alt={gradInfo.name} />
                               <h1>{gradInfo.name}</h1>
                               <p>&quot;{gradInfo.quote}&quot;</p>
                           </li>
                       </div>
                   </Paper>
               ))}
            </div>
            {amountOfCards < gradData.length && (
                <button className="btn" onClick={loadMore}>
                    <ArrowDownwardIcon className="down-arrow-1" />
                    <ArrowDownwardIcon className="down-arrow-2" />
                </button>
            )}
        </div>
    );
}

