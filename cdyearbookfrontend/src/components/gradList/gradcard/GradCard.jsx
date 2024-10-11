import data from "../../../resources/yearEntries.json";
import "./GradCard.css"
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Paper } from "@mui/material";
import { useState } from "react";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useEffect } from "react";

export function GradCard () {
    const [amountOfCards, setAmountOfCards] = useState(6);
    const { cohort } = useParams();
    const [gradData, setGradData] = useState([]);
    const coData = data.find((info) => info.cohort === cohort);

    useEffect(() => {
        const getFoo = async () => {
            setGradData(coData.entries);
        };
        getFoo();
    }, []);

    const loadMore = () => {
        setAmountOfCards(prevAmount => prevAmount + 6); 
    };

    return (
        <>

            <div className="grad-card-container">
                <div className="add-btn">
                    <NavLink to={`/${cohort}/add`}>
                        Add
                    </NavLink>
                </div>
                <div className="grad-card" id="grad-card">
                    {coData.entries.slice(0, amountOfCards).map((gradInfo) => (
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
                    {amountOfCards < coData.entries.length && (
                    <button className="btn" onClick={loadMore}>
                        <ArrowDownwardIcon className="down-arrow-1" />
                        <ArrowDownwardIcon className="down-arrow-2" />
                    </button>
                    )}
                </div>

            </div>
        </>
    );
}

