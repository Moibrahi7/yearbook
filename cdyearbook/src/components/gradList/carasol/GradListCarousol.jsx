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
    return(
        <>
          <Carousel autoPlay = {false} animation = "slide" className="carousol" navButtonsAlwaysVisible = {true} indicators = {false} indicatorContainerProps={{style: {marginTop: "15%", marginBottom: "-5%"}}} key={coData.cohort} >  
            {coData.entries.map((gradInfo) => (
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className= "grad-card-ca">
                  <li>
                    <img src={"/img/" + gradInfo.img} className="w-full" alt="Tailwind CSS Carousel component"  />
                    <h1>{gradInfo.name}</h1>
                    <p>&quot;{gradInfo.qoute}&quot;</p>
                  </li>
                </div>
              </div>
            ))}
          </Carousel>
        </>
    )
    
}

