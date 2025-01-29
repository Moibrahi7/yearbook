import { GradListCarousol } from "../../components/gradList/carasol/GradListCarousol";
import { GradListGrid } from "../../components/gradList/grid/GradListGrid";

export function GradPage (props) {
    return(
        <>
            <GradListCarousol cohort={props.cohort} />
            <GradListGrid cohort={props.cohort} />
        </>
    )
}