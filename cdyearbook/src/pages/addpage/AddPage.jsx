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
    const [img, setImg] = useState("anothony.jpeg");

    let inStyle = {
        borderColor: ""
    }
    // const clearFields = () => {
    //     setName("");
    //     setQoute("");
    //     setImg("anothony.jpeg");
    // }

    return (
        <>
        <div className="add-form">
            <h1>Add Grad</h1>
            <form>
                <div className="form-group">
                    <label>Name</label>
                    <br/>
                    <input type="text" id ='name-field' className='form-control' style={inStyle} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Qoute</label>
                    <br/>
                    <input type="text" id='qoute-field' className='form-control' style={inStyle} onChange={(e) => setQoute(e.target.value)}/>
                </div>
            </form>
            <button type="submit" className="btn" onClick={() => {
                if (!name || !qoute) {
                    alert("Please fill out all fields");
                    return;
                }
                data.find(co => co.cohort === cohort).entries.push({name, qoute, img, entryNum: data.find(co => co.cohort === cohort).entries.length + 1} 
                )}}>Submit</button>
            <br/>
        </div>
        </>
    )
}