import React from "react";
import { useState } from "react"
import "./Add.css"
const _ = require('lodash')
function Add() {
    const [data, setData] = useState([{ isComplete: false, name: "", DOB: "", aadhar: "", mobile: "" }])
    const saveData = (index) => {
        let tempArr = [...data]
        if (tempArr[index].name && tempArr[index].DOB && tempArr[index].aadhar && tempArr[index].mobile) {
            tempArr[index].isComplete = true
            setData(tempArr)
        }
        const localStorageFunction = () => {
            const filteredData = _.filter(data, { "isComplete": true })

            localStorage.setItem("filteredData", JSON.stringify(filteredData))
        }
        localStorageFunction()
    }
    return (
        <div id="a1">
            <div>
                <h3>Add New Person</h3>
            </div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Date of birth</th>
                    <th>Aadhar Number</th>
                    <th>Mobile Number</th>
                    <th>age</th>
                    <th>Action</th>
                </tr>
                <tbody>
                    {
                        data.map((item, index) => {
                            return (
                                <tr>
                                    <td><input type="text" value={item.name} onChange={(e) => {
                                        let newArr = [...data]
                                        newArr[index].name = e.target.value
                                        newArr[index].isComplete = false
                                        setData(newArr)
                                    }} />
                                    </td>
                                    <td><input type="text" value={item.DOB} onChange={(e) => {
                                        let newArr = [...data]
                                        newArr[index].DOB = e.target.value
                                        newArr[index].isComplete = false
                                        setData(newArr)
                                    }} />
                                    </td>
                                    <td><input type="text" value={item.aadhar} onChange={(e) => {
                                        let newArr = [...data]
                                        newArr[index].aadhar = e.target.value
                                        newArr[index].isComplete = false
                                        setData(newArr)
                                    }} />
                                    </td>
                                    <td><input type="text" value={item.mobile} onChange={(e) => {
                                        let newArr = [...data]
                                        newArr[index].mobile = e.target.value
                                        newArr[index].isComplete = false
                                        setData(newArr)
                                    }} />
                                    </td>
                                    <td><input /></td>
                                    <td>
                                        <button onClick={() => {
                                            saveData(index)
                                        }}>save</button>
                                        <button onClick={() => {
                                            let newArr = [...data]
                                            newArr.splice(index, 1)
                                            setData(newArr)
                                            // localStorageFunction()
                                        }}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <button id="Add" onClick={() => {
                let newArr = [...data]
                newArr.push({ isComplete: false, name: "", DOB: "", aadhar: "", mobile: "" })
                setData(newArr)
            }}>Add</button>
        </div>
    )
}
export default Add;