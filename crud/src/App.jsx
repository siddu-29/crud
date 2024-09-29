import React, {useState,useEffect} from "react";
import "./App.css";
import Axios from 'axios'
function App()
{
const[name,setStudentName]= useState("");
const[roll,setRoll]= useState("");
const[section,setSection]= useState("");
const submitReview=()=>
{
Axios.post('http://localhost:3000/student',
{name:name,
roll:roll,
section:section}).then(()=>
{
alert("success");
});
};
return (
<div className="App">
<h1>CRUD Application Demo</h1>
<div className="information">
<label><b>Student Name</b></label>
<input
type="text"
name="name"
onChange={(e)=>{
setStudentName(e.target.value);
}}
required/>
<label><b>RollNo</b></label>
<input
type="text"
name="roll"
onChange={(e)=>{
setRoll(e.target.value);
}}
required/>
<label><b>Section</b></label>
<input
type="text"
name="section"
onChange={(e)=>{
setSection(e.target.value);
}}
required/>
<button onClick={submitReview}><b>Submit</b></button>
</div>
</div>);
}
export default App;
