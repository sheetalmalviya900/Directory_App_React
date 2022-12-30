// import {React} from "react";
// import React from 'react'
// import { result } from "lodash";
import { useState } from "react";
import "./Add.css"
function Reterive() {
    const Result = JSON.parse(localStorage.getItem("filteredData"))
    const [aadhar1, setaadhar] = useState("")
    const [finalResult, setFinalResult] = useState([])
    function Find() {
        for (var i of Result) {
            if (i.aadhar === aadhar1) {
                setFinalResult(i)
                break
            }
        }
    }
    return (
        <div id="a1">
            <div>
                <h3>Reterive Information</h3>
            </div>
            <div>
                <input id="input1" onChange={(e) => {
                    setaadhar(e.target.value)
                }} />
                <button id="Find" onClick={() => { Find() }}>Find</button>
            </div>
            {
                finalResult?finalResult.map((item, index) => {
                    return (
                        <h1>item</h1>
                    )
                }) : ()=>{
                    return (
                        <h5>No Data</h5>
                    )
                }
            }
        </div>
    )
}
export default Reterive;