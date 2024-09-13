import React from "react";
import data from "../../../resources/yearEntries.json";
import "./GradCard.css"
import { useParams } from "react-router-dom";
 
const findCohortById = (cohort) => {
    return data.find(co => co.cohort === cohort);
};

export function GradCard () {
    let { cohort } = useParams()
    const coData = findCohortById(cohort)
    return(
        <div className= "grad-card">
            {coData.entries.map((gradInfo) => (
                <div className="item" key={gradInfo.entryNum}>
                    <li>
                        <img src={"/img/" + gradInfo.img} alt={gradInfo.name} />
                        <h1>{gradInfo.name}</h1>
                        <p>&quot;{gradInfo.qoute}&quot;</p>
                    </li>
                </div>
            ))}
        </div>
    )
}

