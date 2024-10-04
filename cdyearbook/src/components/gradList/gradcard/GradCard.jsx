import data from "../../../resources/yearEntries.json";
import "./GradCard.css"
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Paper } from "@mui/material";
import { useState } from "react";
 
const findCohortById = (cohort) => {
    return data.find(co => co.cohort === cohort);
};

export function GradCard () {
    const { cohort } = useParams();
    const coData = findCohortById(cohort);
    const [amountOfCards, setAmountOfCards] = useState(6);

    function getData() {
        return (
            <>
                {coData.entries.slice(0, amountOfCards).map((gradInfo) => (
                    <Paper key={gradInfo.entryNum}>
                        <div className="item" key={gradInfo.entryNum}>
                            <li>
                                <img src={"/img/" + gradInfo.img} alt={gradInfo.name} />
                                <h1>{gradInfo.name}</h1>
                                <p>&quot;{gradInfo.qoute}&quot;</p>
                            </li>
                        </div>
                    </Paper>
                ))}
            </>
        );
    }

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
                {getData()}
            </div>
            {amountOfCards < coData.entries.length && (
                <button className="btn" onClick={loadMore}>
                    Load More
                </button>
            )}
        </div>
    );
}

