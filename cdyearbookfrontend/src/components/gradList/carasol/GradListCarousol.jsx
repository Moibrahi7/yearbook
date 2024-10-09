import "./GradListCarousol.css";
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import data from "../../../resources/yearEntries.json";


export function GradListCarousol (){
  let { cohort } = useParams()
  let [gradData, setGradData] = useState([]);
  const coData = data.find((info) => info.cohort === cohort);

  useEffect(() => {
    const getFoo = async () => {
      setGradData(coData.entries);
    };
    getFoo();
  })
    return(
        <>
          <Carousel autoPlay = {false} animation = "slide" className="carousol" navButtonsAlwaysVisible = {true} indicators = {false} indicatorContainerProps={{style: {marginTop: "15%", marginBottom: "-5%"}}} key={coData.cohort} >  
            {coData.entries.map((gradInfo) => (
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} key={gradInfo.entryNum}>
                <div className= "grad-card-ca">
                  <li>
                    <img src={"/img/" + gradInfo.img} className="w-full" alt="Tailwind CSS Carousel component"  />
                    <h1>{gradInfo.name}</h1>
                    <p>&quot;{gradInfo.quote}&quot;</p>
                  </li>
                </div>
              </div>
            ))}
          </Carousel>
        </>
    )
    
}

