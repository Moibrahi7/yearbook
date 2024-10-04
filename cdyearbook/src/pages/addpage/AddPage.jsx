import './AddPage.css'
import { useState } from 'react';
import data from "../../resources/yearEntries.json"
import { useParams } from "react-router-dom";

function findCohortById(cohort) {
    return data.find(co => co.cohort === cohort);
}

export default function AddPage() {

    let { cohort } = useParams()
    const coData = findCohortById(cohort)
    const [name, setName] = useState("");
    const [qoute, setQoute] = useState("");
    const [img, setImg] = useState("");

    return (
        <div className="add-form">
            <h1>Add Grad</h1>
            <form>
                <div className="form-group">
                    <label>Name</label>
                    <br/>
                    <input type="text" id ='name' onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Qoute</label>
                    <br/>
                    <input type="text" id='qoute' onChange={(e) => setQoute(e.target.value)}/>
                </div>
            </form>
            <button type="submit" className="btn" onClick={() => {data.find(co => co.cohort === cohort).entries.push({name, qoute, img})}}>Submit</button>
            <br/>
        </div>
    )
}