import "./Home.css"
import yearData from "../../resources/yearEntries.json"
import React from "react";
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
export default function Home (){
    return(
        <>
            {yearData.map((info) => (
             <Carousel autoPlay = {false} animation = "slide" height={500} className="carousol" navButtonsAlwaysVisible = {true} indicators = {false}>  
                        {info.entries.map((gradInfo) =>(
                        <Paper>
                            <div className= "grad-card-c">
                                <li>
                                    <img src={"/img/" + gradInfo.img} className="w-full" alt="Tailwind CSS Carousel component"  />
                                    <h1>{gradInfo.name}</h1>
                                    <p>&quot;{gradInfo.qoute}&quot;</p>
                                </li>
                            </div>
                        </Paper>
                    ))}
                </Carousel>
            ))}
        </>
    )
}