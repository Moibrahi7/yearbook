import React from "react";
import "./GradListCarousol.css";
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import { useParams } from "react-router-dom";
import data from "../../../resources/yearEntries.json";

const findCohortById = (cohort) => {
  return data.find(co => co.cohort === cohort);
};
export function GradListCarousol (){
  let { cohort } = useParams()
  const coData = findCohortById(cohort)
  let backImg = "/img/${coData.entries[0].img}"
    return(
        <>
          <Carousel autoPlay = {false} animation = "slide" height={500} className="carousol bg-gray-800" navButtonsAlwaysVisible = {true} indicators = {false}>  
            {coData.entries.map((gradInfo) => (
              <>
                {/* <div 
                  className="grad-card"
                  style={{
                    backgroundImage: `url("/img/${gradInfo.img}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '100%',
                    width: '100%',
                    position: 'relative',
                    alignSelf: 'center',
                  }}
                /> */}
              <Paper>
                <div className= "grad-card-c">
                  <li>
                    <img src={"/img/" + gradInfo.img} className="w-full" alt="Tailwind CSS Carousel component"  />
                    <h1>{gradInfo.name}</h1>
                    <p>&quot;{gradInfo.qoute}&quot;</p>
                  </li>
                </div>
              </Paper>
              </>
            ))}
          </Carousel>
        </>
    )
    
}