import "./GradListCarousol.css";
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import { useParams } from "react-router-dom";
import { db } from "../../../../firebase";
import { collectionGroup, getDocs, query, where, orderBy, limit} from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";

export function GradListCarousol (){
  let { cohort } = useParams()
  const coData = query(collectionGroup(db, 'entries') , where('cohort', '==', parseFloat(cohort)), orderBy('entryNum', 'asc'));
  let [gradData, setGradData] = useState([]);
  useEffect(() => {
    const getFoo = async () => {
      const data = await getDocs(coData);
      setGradData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getFoo();
  })
    return(
        <>
          <Carousel autoPlay = {false} animation = "slide" className="carousol" navButtonsAlwaysVisible = {true} indicators = {false} indicatorContainerProps={{style: {marginTop: "15%", marginBottom: "-5%"}}} key={coData.cohort} >  
            {gradData.map((gradInfo) => (
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

