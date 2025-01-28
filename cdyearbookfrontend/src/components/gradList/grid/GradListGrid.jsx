import { GradCard } from "../gradcard/GradCard";
import "./GradListGrid.css";

export function GradListGrid (props) {
    return(
        <div className="grid">
            <GradCard cohort={props.cohort}/>
        </div>
    )
}