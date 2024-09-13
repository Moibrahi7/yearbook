import React from "react";
import "./GradListCarousol.css";
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import { useParams } from "react-router-dom";
import data from "../../../resources/yearEntries.json";


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const findCohortById = (cohort) => {
  return data.find(co => co.cohort === cohort);
};
export function GradListCarousol (){
  let { cohort } = useParams()
  const coData = findCohortById(cohort)
    return(
        <>
          <Carousel autoPlay = {false} animation = "slide" height={500} className="carousol bg-gray-800" navButtonsAlwaysVisible = {true} indicators = {false}>  
            {coData.entries.map((gradInfo) => (
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
        </>
    )
    
}