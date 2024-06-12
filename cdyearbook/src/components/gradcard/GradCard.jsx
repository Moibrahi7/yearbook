import React from "react";
import data from "../../resources/entries.json";
import "./GradCard.css"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
 const queryClient = new QueryClient();

export function GradCard () {
    const info = data;
    return(
        <div className= "grad-card">
            {data.map((gradInfo) => (
                <div className="carousel-item" key={gradInfo.entryNum}>
                    <li>
                        {console.log("/img/" + gradInfo.img)}
                        <img src={"/img/" + gradInfo.img} alt={gradInfo.name} />
                        <h1>{gradInfo.name}</h1>
                        <p>&quot;{gradInfo.qoute}&quot;</p>
                    </li>
                </div>
            ))}
        </div>
    )
}

