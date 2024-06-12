import React from "react";
import data from "../../resources/entries.json";
import img from ""
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();
export function GradCard () {
    const info = data;
    return(
        <div className= "grad-card">
            {data.map((gradInfo) => (
                <div className="carousel-item">
                    <li>
                        <img src={"../../../img" + gradInfo.img} alt={gradInfo.name} />
                        <h1>{gradInfo.name}</h1>
                        <p>{gradInfo.qoute}</p>
                    </li>
                </div>
            ))}
        </div>
    )
}