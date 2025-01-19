import "./Home.css"
import yearData from "../../resources/yearEntries.json"
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
export default function Home (){
    return(
        <>
            <div className="g-container">
                {yearData.map((info) => (
                <Carousel autoPlay = {false} animation = "slide" height={500} className="carousol" navButtonsAlwaysVisible = {true} indicators = {false} key={info.cohort} style={{backgroundColor: "gray"}}>  
                            {info.entries.map((gradInfo) =>(
                            <Paper key={gradInfo.entryNum}>
                                <div className= "grad-card-c" key={gradInfo.entryNum}>
                                    <li key={gradInfo.entryNum}>
                                        <img src={"/img/" + gradInfo.img} className="w-full" alt="Tailwind CSS Carousel component"  />
                                        <h1>{gradInfo.name}</h1>
                                        <p>&quot;{gradInfo.quote}&quot;</p>
                                    </li>
                                </div>
                            </Paper>
                        ))}
                    </Carousel>
                ))}
            </div>
        </>
    )
}